import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterState'
import websiteReducer from './WebsiteState'

export const store = configureStore({
    reducer: {
    counter: counterReducer,
    website: websiteReducer
  },
})