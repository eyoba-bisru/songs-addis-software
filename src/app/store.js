import { configureStore } from '@reduxjs/toolkit'
import showReducer from '../features/show/showSlice'
import editReducer from '../features/edit/editSlice'

export const store = configureStore({
  reducer: {
    show: showReducer,
    edit: editReducer
  },
})