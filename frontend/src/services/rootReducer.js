import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userReducer'
import authReducer from './user/auth/authReducer'
import bookReducer from './book/bookReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
  auth: authReducer
})