import React, {Component} from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

class Event extends Component {
    componentDidMount() {
        this.$el = $(this.el);

        var eventObject = {
            title: $.trim(this.$el.text()) // use the element's text as the event title
        };

        this.$el.data('eventObject', eventObject);

        this.$el.draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });
    }

    componentWillUnmount() {
        this.$el.draggable('destroy');
    }

    render() {
        const {name, style} = this.props.type;
        const classes = 'external-event label ' + style;
        return <div className={classes} ref={el => this.el = el}>{name}</div>;
    }

}

const EventManagement = ({events_types}) => (
    <div id="external-events" className="m-t-30 m-b-30">
        <h4 className="drg-event-title"> Draggable Events</h4>

        {events_types.map((type) => <Event type={type} key={type.name} />)}
    </div>
)


export default EventManagement;