import { configureStore } from '@reduxjs/toolkit'
import lunchReducer from '../features/lunch/lunchSlice'

export const store = configureStore({
  reducer: {
    lunch: lunchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch