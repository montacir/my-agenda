import events from '../data/events';
import events_types from '../data/events_types';


const DEFAULT_STATE_EVENTS = {
    events_types,
    events,
};


export  const rootReducers = (state = DEFAULT_STATE_EVENTS, action) => {
    console.log('state',state);
    switch (action.type) {
        default:
            return state;
    }
};

