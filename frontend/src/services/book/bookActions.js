import axios from 'axios'
import * as BT from './bookTypes'
import { BASE_URL } from '../../utils/requests'

export const saveBook = book => {
  return dispatch => {
    dispatch({
      type: BT.SAVE_BOOK_REQUEST
    })

    axios.post(`${BASE_URL}/books`, book)
      .then(response => {
        dispatch(bookSuccess(response.data))
      })
      .catch(error => {
        dispatch(bookFailure(error))
     })
  }}

export const fetchBook = bookId => {
  return dispatch => {
    dispatch({
      type: BT.FETCH_BOOK_REQUEST
    })
    axios(`${BASE_URL}/books` + bookId)
      .then(response => {
        dispatch(bookSuccess(response.data))
      })
      .catch(error => {
        dispatch(bookFailure(error))
     })
  }}

export const updateBook = book => {
  return dispatch => {
    dispatch({
      type: BT.UPDATE_BOOK_REQUEST
    })
    axios.put(`${BASE_URL}/books`, book)
      .then(response => {
        dispatch(bookSuccess(response.data))
      })
      .catch(error => {
        dispatch(bookFailure(error))
     })
  }}

export const deleteBook = bookId => {
  return dispatch => {
    dispatch({
      type: BT.DELETE_BOOK_REQUEST
    })
    axios.delete(`${BASE_URL}/books/` + bookId)
      .then(response => {
        dispatch(bookSuccess(response.data))
      })
      .catch(error => {
        dispatch(bookFailure(error))
     })
  }}

const bookSuccess = book => {
  return {
    type: BT.BOOK_SUCCESS,
    payload: book
  }
}

const bookFailure = error => {
  return {
    type: BT.BOOK_FAILURE,
    payload: error
  }
}

export const fetchLanguages = () => {
  return dispatch => {
    dispatch({
      type: BT.FETCH_LANGUAGES_REQUEST
    })
    axios(`${BASE_URL}/books/languages`)
      .then(response => {
        dispatch({
          type: BT.LANGUAGES_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: BT.LANGUAGES_FAILURE,
          payload: error
        })
     })
  }}

export const fetchGenres = () => {
  return dispatch => {
    dispatch({
      type: BT.FETCH_GENRES_REQUEST
    })
    axios(`${BASE_URL}/books/genres`)
      .then(response => {
        dispatch({
          type: BT.GENRES_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: BT.GENRES_FAILURE,
          payload: error
        })
     })
  }}