import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './user/auth/authReducer'
import bookReducer from './book/bookReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({ auth: authReducer, book: bookReducer, user: userReducer })
export default rootReducer