import axios from 'axios'
import * as BT from './bookTypes'
import { BASE_URL } from '../../utils/requests'

export const saveBook = book => dispatch => {
  dispatch({
    type: BT.SAVE_BOOK_REQUEST
  })
  axios.post(`${BASE_URL}/books`, book)
    .then(response => {
      dispatch(bookSuccess(response.data))
    })
    .catch(error => {
      dispatch(bookFailure(error.message))
   })
}

export const fetchBook = bookId => dispatch => {
  dispatch({
    type: BT.FETCH_BOOK_REQUEST
  })
  axios(`${BASE_URL}/books/` + bookId)
    .then(response => {
      dispatch(bookSuccess(response.data))
    })
    .catch(error => {
      dispatch(bookFailure(error.message))
   })
}

export const updateBook = bookId => dispatch => {
  dispatch({
    type: BT.UPDATE_BOOK_REQUEST
 })
  axios.put(`${BASE_URL}/books/` + bookId)
    .then(response => {
      dispatch(bookSuccess(response.data))
    })
    .catch(error => {
      dispatch(bookFailure(error.message))
   })
}

export const patchBook = bookId => dispatch => {
  dispatch({
    type: BT.PATCH_BOOK_REQUEST
  })
  axios.patch(`${BASE_URL}/books/` + bookId)
    .then(response => {
      dispatch(bookSuccess(response.data))
    })
    .catch(error => {
      dispatch(bookFailure(error.message))
   })
}

export const deleteBook = bookId => dispatch => {
  dispatch({
    type: BT.DELETE_BOOK_REQUEST
  })
  axios.delete(`${BASE_URL}/books/` + bookId)
    .then(response => {
      dispatch(bookSuccess(response.data))
    })
    .catch(error => {
      dispatch(bookFailure(error.message))
   })
}

const bookSuccess = book => ({
  type: BT.BOOK_SUCCESS,
  payload: book
})

const bookFailure = error => ({
  type: BT.BOOK_FAILURE,
  payload: error
})

export const fetchLanguages = () => dispatch => {
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
}

export const fetchGenres = () => dispatch => {
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
}