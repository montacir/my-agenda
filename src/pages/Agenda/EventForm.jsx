import React, {Component} from 'react';


export default class EventForm extends Component {
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <form role="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Event Title"/>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: "100%"}}>Add New Event</button>
            </form>
        );
    }
}