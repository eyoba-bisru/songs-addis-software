import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: "",
  title: "",
}

export const editContentSlice = createSlice({
  name: 'editContent',
  initialState,
  reducers: {
    changeEditContent: (state, {payload: {id, title}}) => {
      state.id = id,
      state.title = title
    },
  },
})

export const { changeEditContent } = editContentSlice.actions

export default editContentSlice.reducer