import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class EventForm extends Component {
    addEventType = () => {
        if (this.props.name !== '')
            this.props.addEventType(this.props.name);
    }
    setEventTypeName = (event) => {
        event.preventDefault();
        this.props.setEventTypeName(event.target.value);
    }

    render() {
        return (
            <form onSubmit={this.addEventType}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Event Title"
                           onChange={this.setEventTypeName} value={this.props.name}/>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: "100%"}}>Add New Event
                </button>
            </form>
        );
    }
}

const mapStateToProps = ({events: {event_type_form}}) => (event_type_form);
export default connect(mapStateToProps, actions)(EventForm);