import * as AT from './authTypes'

const initialState = { username: "", isLoggedIn: "" }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AT.LOGIN_REQUEST:
    case AT.LOGOUT_REQUEST:
      return {
        ...state
      }
    case AT.SUCCESS:
    case AT.FAILURE:
      return {
        username: action.payload.username,
        isLoggedIn: action.payload.isLoggedIn
      }
    default:
      return state
   }
}