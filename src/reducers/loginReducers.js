import User from '../models/User';

import * as constants from "../actions/index";

const DEFAULT_STATE = {
    isFetching: false,
    isConnected: false,
    isError: false,
    email: '',
    password: ''
};
   

export const loginReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case constants.START_LOGIN_USER:
            return {
                ...state,
                isFetching: true,
                isError: false
            };
            break;
        case constants.COMPLETE_LOGIN_USER:
            return {
                ...state,
                isConnected: true,
                isFetching: false,
                isError: false
            };
            break;
        case constants.ERROR_LOGIN_USER:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
            break;
        case constants.LOGOUT_USER:
            User.logout();
            return DEFAULT_STATE
            break;
        case constants.IS_LOGGED:
            return {
                ...state,
                isConnected: User.isConnected()
            }
            break;
    }
    return state;
}

