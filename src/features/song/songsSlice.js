import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  isLoading: false
}

export const songsSlice = createSlice({
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

export const { getSongsFailure, getSongsFetch, getSongsSuccess } = songsSlice.actions

export default songsSlice.reducer