import { SET_THEME } from "../actions/theme"

const themeState = {
    theme: "auto",
}

export const themeReducer = (state = themeState, action) =>{
    switch (action.type) {
        case SET_THEME:
            return {...state, theme: action.payload}
        default:
            return state;
    }
}