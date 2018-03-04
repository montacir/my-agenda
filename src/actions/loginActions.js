import * as types from './constants';
import User from '../models/User';

export const login = (user) => {
    return dispatch => {
        dispatch({type: types.START_LOGIN_USER});

        return User.login(user, (error) => {
            if (error) {
                dispatch({
                    type: types.ERROR_LOGIN_USER
                })
            } else {
                dispatch({
                    type: types.COMPLETE_LOGIN_USER
                })
            }
        });
    }
}
export const logout = () => {
    return {
        type: types.LOGOUT_USER
    }
}
export const isLogged = () => {
    return {
        type: types.IS_LOGGED
    }
}
