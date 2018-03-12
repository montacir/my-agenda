import * as  jwt from 'jsonwebtoken';
import {Event, EventType} from "./Event";
import {secret, styleEventTypes} from '../../kernel/config/settings';

export const createEventType = (req, res) => {
    console.log('POST - /api/event/type', req.body, req);
    var decoded = jwt.verify(req.headers.token, secret);
    const event_type = new EventType({
        name: req.body.name,
        style: styleEventTypes[parseInt(Math.random() * styleEventTypes.length)],
        createdBy: decoded._id
    });
    event_type.save((err, {name, style, _id}) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json({name, style, _id});
    })
};

export const getEventTypes = (req, res) => {
    console.log('GET - /api/event/types');
    var decoded = jwt.verify(req.headers.token, secret);
    EventType.find({createdBy: decoded._id}).lean().exec(function (err, et) {
        console.log('getEventTypes', et, err);
        if (err) {
            return res.status(500).json(err);
        }

        return res.status(200).json(et);
    })

};

export const createEvent = (req, res) => {
    console.log('POST - /api/event/event', req.body, req);
    var decoded = jwt.verify(req.headers.token, secret);
    const event = new Event({
        _type: req.body._type,
        date: new Date(req.body.time),
        createdBy: decoded._id
    });
    event.save((err, {_id, date}) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json({_id, start: date});
    })
};

export const getEvents = (req, res) => {
    console.log('GET - /api/event/events');
    var decoded = jwt.verify(req.headers.token, secret);
    Event.find({createdBy: decoded._id}).populate('_type').lean().exec(function (err, et) {
        console.log('getEventTypes', et, err);
        if (err) {
            return res.status(500).json(err);
        }

        return res.status(200).json(et.map((_et) => ({
            title: _et._type.name,
            start: _et.date
        })));
    })

};