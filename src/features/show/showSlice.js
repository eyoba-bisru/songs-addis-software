import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value
    },
  },
})

export const { change } = showSlice.actions

export default showSlice.reducer