import { combineReducers } from '@reduxjs/toolkit'
import bookReducer from './book/bookReducer'
import userReducer from './user/userReducer'
import authReducer from './user/auth/authReducer'

const rootReducer = combineReducers({ book: bookReducer, user: userReducer, auth: authReducer })
export default rootReducer