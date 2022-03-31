import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterState'
import websiteReducer from './WebsiteState'
import authReducer from './AuthState'

export const store = configureStore({
    reducer: {
    counter: counterReducer,
    website: websiteReducer,
    auth: authReducer,
  },
})