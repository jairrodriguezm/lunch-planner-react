import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  localizador: '',
  ingredientes: [],
}

const lunchSlice = createSlice({
  name: 'lunch',
  initialState,
  reducers: {},
})

export default lunchSlice.reducer