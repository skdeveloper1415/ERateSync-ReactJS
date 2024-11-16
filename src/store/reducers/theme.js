import { SWITCH_THEME } from '../actions/theme'
const initialState = {
    value: 'W'
}
function themeReducer(state = initialState, action) {
    const htmlTag = document.querySelector("html");
    const appliedTheme = localStorage.getItem('RedingtoneTheme')

    switch (action.type) {
        case SWITCH_THEME:
            localStorage.setItem("RedingtoneTheme", action.theme)
            htmlTag.setAttribute("class", action.theme === "D" ? "dark" : "");
            return { value: action.theme }
        default:
            //localStorage.setItem("theme", appliedTheme === "D" ? "dark" : undefined)
            htmlTag.setAttribute("class", appliedTheme === "D" ? "dark" : "");
            return { value: appliedTheme === "D" ? "D" : "W" }
    }
}

export default themeReducer;