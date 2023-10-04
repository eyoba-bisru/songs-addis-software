import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongsFetch } from '../features/song/songsSlice';

const useSong = () => {
  const songs = useSelector((state) => state.songs.value);
  const isLoading = useSelector((state) => state.songs.isLoading);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return {songs, isLoading}
}

export default useSong