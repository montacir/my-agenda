import React, {Component} from 'react';
import {connect} from 'react-redux';

import Calendar from './Calendar';
import EventManagement from './EventManagement';
import EventForm from './EventForm';
import * as actions from '../../actions';

const AgendaHeader = () => (
    <div className="page-head">
        <h3 className="m-b-less">
            Calendar
        </h3>

        <div className="state-information">
            <ol className="breadcrumb m-b-less bg-less">
                <li><a href="#">Home</a></li>
                <li><a href="#">Components</a></li>
                <li className="active"> Calendar</li>
            </ol>
        </div>

    </div>
);

const AgendaBody = ({events_types, events}) => (<div className="wrapper">

        <div className="row">
            <aside className="col-lg-3">
                <EventForm/>
                <EventManagement events_types={events_types}/>

            </aside>
            <aside className="col-lg-9">
                <section className="panel">
                    <div className="panel-body">
                        <Calendar events={events}/>
                    </div>
                </section>
            </aside>
        </div>

    </div>
);

class AgendaPage extends Component{
    componentDidMount() {
        this.props.getEventTypes();
        this.props.getEvents();
    }

    render() {
        const {events_types, events} = this.props;
        console.log('AgendaPage',events_types);
        return (<AgendaBody events_types={events_types} events={events}/>);
    }
}


const mapStateToProps = ({events}) => {
    const {events_types} = events;
    return {events_types,events: events.events};
};


export default connect(mapStateToProps,actions)(AgendaPage);