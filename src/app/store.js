import { configureStore } from '@reduxjs/toolkit'
import showReducer from '../features/show/showSlice'
import editReducer from '../features/edit/editSlice'
import editContentReducer from '../features/edit/editContentSlice'
import songsReducer from '../features/song/songsSlice'
import createSagaMiddleware from 'redux-saga'
import songsSaga from '../sagas/songsSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    show: showReducer,
    edit: editReducer,
    songs: songsReducer,
    editContent: editContentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(songsSaga)