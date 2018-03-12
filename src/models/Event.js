import axios from "axios/index";

export default class Event {

    static addEventType(name,callback) {
        return axios.post('/api/event/type', {name})
            .then((response) => {
                callback(false, response.data);
            })
            .catch((error) => {
                callback(true, error);
            });
    }

    static getEventTypes(callback){
        return axios.get('/api/event/types')
            .then((response) => {
                callback(false, response.data);
            })
            .catch((error) => {
                callback(true, error);
            });
    }

    static getEvents(callback){
        return axios.get('/api/event/events')
            .then((response) => {
                callback(false, response.data);
            })
            .catch((error) => {
                console.log('error',error.response);
                callback(true, error);
            });
    }

    static addEvent(event,callback){
        return axios.post('/api/event/event', event)
            .then((response) => {
                callback(false, response.data);
            })
            .catch((error) => {
                callback(true, error);
            });
    }
}
