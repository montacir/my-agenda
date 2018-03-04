import React from 'react';
import Calendar from './Calendar.jsx';
import EventManagement from './EventManagement.jsx';
import EventForm from './EventForm.jsx';
import {connect} from 'react-redux';


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

const AgendaPage = ({events_types, events}) => [
    <AgendaHeader key={"header"}/>,
    <AgendaBody key={"body"} events_types={events_types} events={events}  />
];
const mapStateToProps = ({root:{events_types,events}}) => ({events_types, events});


export default connect(mapStateToProps)(AgendaPage);