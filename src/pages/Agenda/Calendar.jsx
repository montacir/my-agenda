import React, {Component} from 'react';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';
//import 'fullcalendar-scheduler';
export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: props.events
        };
    }

    componentDidMount() {
        this.$el = $(this.el);

        /* initialize the calendar
         -----------------------------------------------------------------*/

        this.$el.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }

            },
            events: this.state.events
        });

        //this.$el.somePlugin();
    }

    componentWillUnmount() {
        this.$el.fullCalendar('destroy');
    }

    render() {
        return <div id="calendar" className="has-toolbar" ref={el => this.el = el}></div>;
    }
}