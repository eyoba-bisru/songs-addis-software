import { configureStore } from '@reduxjs/toolkit'
import showReducer from '../features/show/showSlice'
import editReducer from '../features/edit/editSlice'
import songReducer from '../features/song/songSlice'
import createSagaMiddleware from 'redux-saga'
import songSaga from '../sagas/songSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    show: showReducer,
    edit: editReducer,
    song: songReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(songSaga)