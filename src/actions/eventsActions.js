import {
    GET_EVENTS,
    SET_EVENT_TYPE_NAME,
    START_ADD_EVENT_TYPE,
    ERROR_ADD_EVENT_TYPE,
    COMPLETE_ADD_EVENT_TYPE,
    START_GET_EVENT_TYPES,
    ERROR_GET_EVENT_TYPES,
    COMPLETE_GET_EVENT_TYPES,
    START_GET_EVENTS,
    ERROR_GET_EVENTS,
    COMPLETE_GET_EVENTS,
    START_ADD_EVENT,
    ERROR_ADD_EVENT,
    COMPLETE_ADD_EVENT,
} from './constants';
import {Event} from "../models";


export function getEventTypes() {
    return dispatch => {
        dispatch({type: START_GET_EVENT_TYPES});

        return Event.getEventTypes((error,response) => {
            if (error) {
                dispatch({
                    type: ERROR_GET_EVENT_TYPES,
                    payload: response
                })
            } else {
                dispatch({
                    type: COMPLETE_GET_EVENT_TYPES,
                    payload: response
                })
            }
        });
    }
}

export function getEvents() {
    return dispatch => {
        dispatch({type: START_GET_EVENTS});

        return Event.getEvents((error,response) => {
            if (error) {
                dispatch({
                    type: ERROR_GET_EVENTS,
                    payload: response
                })
            } else {
                dispatch({
                    type: COMPLETE_GET_EVENTS,
                    payload: response
                })
            }
        });
    }
}


export function addEventType(name) {
    return dispatch => {
        dispatch({type: START_ADD_EVENT_TYPE});

        return Event.addEventType(name, (error,response) => {
            if (error) {
                dispatch({
                    type: ERROR_ADD_EVENT_TYPE,
                    payload: response
                })
            } else {
                dispatch({
                    type: COMPLETE_ADD_EVENT_TYPE,
                    payload: response
                })
            }
        });
    }
}

export function setEventTypeName(data) {
    return {
        type: SET_EVENT_TYPE_NAME,
        payload: data
    }
}

export function addEvent(event) {
    console.log('event',event);
    return dispatch => {
        dispatch({type: START_ADD_EVENT});

        return Event.addEvent(event, (error,response) => {
            if (error) {
                dispatch({
                    type: ERROR_ADD_EVENT,
                    payload: response
                })
            } else {
                dispatch({
                    type: COMPLETE_ADD_EVENT,
                    payload: {...event,...response}
                })
            }
        });
    }
}