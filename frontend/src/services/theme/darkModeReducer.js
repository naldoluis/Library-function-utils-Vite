import { DARK_MODE } from './darkModeTypes'

const initialState = { isdarkMode: !!JSON.parse(localStorage.getItem("darkmode")) }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        isdarkMode: action.payload
      }
    default:
      return state
  }
}