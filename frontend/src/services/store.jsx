import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

const store = configureStore(rootReducer, applyMiddleware(thunk))

export default store