import {call, takeEvery, put} from 'redux-saga/effects'
import { getSongsFailure, getSongsSuccess } from '../features/song/songSlice'

function* workGetSongFetch() {
    try {
        const songs = yield call(() => fetch("https://test-addis-software-backend.onrender.com/api/v1/songs"))
        const formattedSongs = yield songs.json()
        yield put(getSongsSuccess(formattedSongs))  
    } catch (error) {
      yield put(getSongsFailure())  
    }
   }

function* songSaga() {
    yield takeEvery('songs/getSongsFetch', workGetSongFetch)
}

export default songSaga