import {createEventType, getEventTypes, createEvent, getEvents} from './EventCtrl';

export const EventRoutes = [
    {
        path: '/api/event/type',
        httpMethod: 'POST',
        scope: 'private',
        middleware: [createEventType]
    },
    {
        path: '/api/event/types',
        httpMethod: 'GET',
        scope: 'private',
        middleware: [getEventTypes]
    },
    {
        path: '/api/event/event',
        httpMethod: 'POST',
        scope: 'private',
        middleware: [createEvent]
    },
    {
        path: '/api/event/events',
        httpMethod: 'GET',
        scope: 'private',
        middleware: [getEvents]
    }
];
