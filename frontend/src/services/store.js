import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'
import { configureStore, applyMiddleware, composeEnhancers } from '@reduxjs/toolkit'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore({reducer:reducers},composeEnhancers(rootReducer, applyMiddleware(thunkMiddleware)))

export default store