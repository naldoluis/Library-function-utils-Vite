import thunk from 'redux-thunk'
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const store = configureStore({ reducer : rootReducer, reducer : applyMiddleware(thunk) })
export default store