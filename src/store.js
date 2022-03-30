import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './stores/CounterSlice'

export const store = configureStore({
    reducer: {
      counter:counterReducer
  },
})