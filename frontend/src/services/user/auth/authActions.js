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

export const logoutUser = () => {
  return dispatch => {
    dispatch(logoutRequest())
    localStorage.removeItem("jwtToken")
    dispatch(success({ username: "", isLoggedIn: false }))
  }
}

const loginRequest = () => {
  return {
    type: AT.LOGIN_REQUEST
  }
}

const logoutRequest = () => {
  return {
    type: AT.LOGOUT_REQUEST
  }
}

const success = isLoggedIn => {
  return {
    type: AT.SUCCESS,
    payload: isLoggedIn
  }
}

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false
  }
}