import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {loginReducers} from './loginReducers';
import {rootReducers} from './rootReducers';

console.log('loginReducers',loginReducers);
export const reducers = combineReducers({
    root: rootReducers,
    form: formReducer,
    login: loginReducers
});

