import { createSlice } from '@reduxjs/toolkit'
import userReducer from './user/userReducer'
import authReducer from './user/auth/authReducer'
import bookReducer from './book/bookReducer'

const rootReducer = createSlice({
  user: userReducer,
  book: bookReducer,
  auth: authReducer
})
export default rootReducer