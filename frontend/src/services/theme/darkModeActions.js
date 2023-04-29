import { DARK_MODE } from './darkModeTypes'

export const handleDarkMode = theme => async dispatch => {
  localStorage.setItem("darkmode", theme)

  dispatch({
    type: DARK_MODE,
    payload: theme
  })
}