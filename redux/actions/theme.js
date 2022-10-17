const THEME = 'THEME';
export const SET_THEME = `${THEME} Set theme`;

export const setTheme = (payload) => {
    return {
        type: SET_THEME,
        payload: payload
    }
}

