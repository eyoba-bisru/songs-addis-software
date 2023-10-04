import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  isLoading: false
}

export const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true
    },
    getSongsSuccess: (state, action) => {
        state.value = action.payload
        state.isLoading = false
    },
    getSongsFailure: (state, action) => {
        state.isLoading = false
    }
  },
})

export const { getSongsFailure, getSongsFetch, getSongsSuccess } = songSlice.actions

export default songSlice.reducer