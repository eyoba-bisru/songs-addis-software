import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    changeEdit: (state) => {
      state.value = !state.value
    },
  },
})

export const { changeEdit } = editSlice.actions

export default editSlice.reducer