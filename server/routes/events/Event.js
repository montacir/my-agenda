import mongoose, {Schema} from 'mongoose';

const EventTypechema = new Schema({
    name: String,
    style: String,
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});


export const EventType = mongoose.model('EventType', EventTypechema);

const Eventchema = new Schema({
    _type: { type: Schema.Types.ObjectId, ref: 'EventType' },
    date: Date,
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});
export const Event = mongoose.model('Event', Eventchema);
