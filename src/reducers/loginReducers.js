 import * as constants from "../actions";

 const DEFAULT_STATE = {
     isFetching: false,
     isConnected: false,
     isError: false,
     auth_token: null,
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
                 auth_token:action.payload.token,
                 isConnected: true,
                 isFetching: false,
                 isError: false
             };
             break;
         case constants.ERROR_LOGIN_USER:
             return {
                 ...state,
                 isFetching: true,
                 isError: true
             };
             break;
         case constants.LOGOUT_USER:

             return DEFAULT_STATE
             break;
     }
     return state;
 }

