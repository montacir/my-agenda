import {
    START_ADD_EVENT_TYPE,
    ERROR_ADD_EVENT_TYPE,
    COMPLETE_ADD_EVENT_TYPE,
    SET_EVENT_TYPE_NAME,
    COMPLETE_GET_EVENT_TYPES,
    COMPLETE_ADD_EVENT,
    COMPLETE_GET_EVENTS
} from '../actions';

const EVENT_DEFAULT_STATE = {
    events_types: [],
    events: [],
    event_type_form: {
        name: '',
        saving: false,
        error: false,
        treated: false
    }
};


export const eventReducers = (state = EVENT_DEFAULT_STATE, action) => {
    switch (action.type) {
        case COMPLETE_GET_EVENT_TYPES:
            return Object.assign({}, state, {
                events_types: action.payload
            });
        case COMPLETE_GET_EVENTS:
            return Object.assign({}, state, {
                events: action.payload.map((_event) => {
                    const date = new Date(_event.start);
                    const d = date.getDate();
                    const m = date.getMonth();
                    const y = date.getFullYear();
                    return {
                        ..._event,
                        start: new Date(y, m, d)
                    };
                })
            });;
        case SET_EVENT_TYPE_NAME:
            return Object.assign({}, state, {
                event_type_form: {
                    name: action.payload
                }
            });
        case START_ADD_EVENT_TYPE:
            return Object.assign({}, state, {
                event_type_form: {
                    saving: true,
                    error: false,
                    treated: false
                }
            });
        case ERROR_ADD_EVENT_TYPE:
            return Object.assign({}, state, {
                event_type_form: {
                    saving: false,
                    error: true,
                    treated: true
                }
            });
        case COMPLETE_ADD_EVENT_TYPE:
            return Object.assign({}, state, {
                events_types: [...state.events_types, action.payload],
                event_type_form: {
                    name: '',
                    saving: false,
                    error: false,
                    treated: true
                }
            });
        case COMPLETE_ADD_EVENT:
            return Object.assign({}, state, {
                events: [...state.events, action.payload]
            });
    }
    return state;
}