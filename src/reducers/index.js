import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {loginReducers} from './loginReducers';
import {eventReducers} from './eventReducers';

export const reducers = combineReducers({
    form: formReducer,
    login: loginReducers,
    events:eventReducers
});

