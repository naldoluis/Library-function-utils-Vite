import axios from 'axios'
import * as AT from './authTypes'
import { BASE_URL } from '../../../utils/requests'

export const authenticateUser = (email, password) => async dispatch => {
  dispatch(loginRequest())
  try {
    const response = await axios.post(`${BASE_URL}/user/authenticate`, { email, password })
    localStorage.setItem("jwtToken", response.data.token)
    dispatch(success({ username: response.data.name, isLoggedIn: true }))
    return Promise.resolve(response.data)
  } catch (error) {
    dispatch(failure())
    return Promise.reject(error)
  }
}

export const logoutUser = () => dispatch => {
  dispatch(logoutRequest())
  localStorage.removeItem("jwtToken")
  dispatch(success({ username: "", isLoggedIn: false }))
}

const loginRequest = () => ({
  type: AT.LOGIN_REQUEST
})

const logoutRequest = () => ({
  type: AT.LOGOUT_REQUEST
})

const success = isLoggedIn => ({
  type: AT.SUCCESS,
  payload: isLoggedIn
})

const failure = () => ({
  type: AT.FAILURE,
  payload: false
})