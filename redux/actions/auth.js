const AUTH = `AUTH`;
export const AUTH_SET_LOGGED_IN = `${AUTH} Set logged in`;
export const AUTH_LOG_OUT = `${AUTH} Log out`

export const setLoggedIn = (payload) => {
    return {
        type: AUTH_SET_LOGGED_IN,
        payload: payload
    }
}

export const logOut = (payload) => {
    return {
        type: AUTH_LOG_OUT,
        payload: payload
    }
}