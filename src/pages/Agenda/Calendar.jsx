import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';
//import 'fullcalendar-scheduler';
import * as actions from '../../actions';

class Calendar extends Component {
    calendarSettings = {
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        editable: false,
        droppable: true
    };
    setCalendarSettings = (el, me) => (
        {
            ...this.calendarSettings,

            drop: function (date, allDay) {

                var originalEventObject = $(this).data('eventObject');
                var copiedEventObject = $.extend({}, originalEventObject);

                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;

                el.fullCalendar('renderEvent', copiedEventObject, true);

                me.props.addEvent({
                    title: copiedEventObject.title,
                    time: copiedEventObject.start._i,
                    _type: $(this).attr('id').split('-')[1]
                });
            },
            events: this.props.events
        });

    componentDidMount() {

        this.$el = $(this.el);

        this.$el.fullCalendar(this.setCalendarSettings(this.$el, this));

    }

    componentWillUnmount() {
        this.$el.fullCalendar('destroy');
    }

    componentDidUpdate() {
        this.$el = $(this.el);

        this.$el.fullCalendar('removeEventSources');

        this.$el.fullCalendar('addEventSource', this.props.events);
    }

    render() {
        return <div id="calendar" className="has-toolbar" ref={el => this.el = el}></div>;
    }
}


export default connect(null, actions)(Calendar);