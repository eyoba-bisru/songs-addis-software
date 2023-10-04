import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const useEdit = () => {
  const edit = useSelector((state) => state.edit.value);
  const dispatch = useDispatch();

  return {edit, dispatch};
}

export default useEdit