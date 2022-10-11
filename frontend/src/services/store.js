import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

const store = configureStore({ reducer : rootReducer, reducer : applyMiddleware(thunk) })
export default store