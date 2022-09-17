import { AUTH_LOG_OUT, AUTH_SET_LOGGED_IN } from "../actions/auth";

const authState = {
    loggedIn: false,}

export const authReducer = (state = authState, action) => {

    switch (action.type) {
        case AUTH_SET_LOGGED_IN:
            return {...state, loggedIn: action.payload};

        case AUTH_LOG_OUT:
                // localStorage.removeItem('token');
                // localStorage.removeItem('refreshToken');
                // localStorage.removeItem('userInfo');
                return {...state, loggedIn: false}
        default:
            return state;
    }
}
