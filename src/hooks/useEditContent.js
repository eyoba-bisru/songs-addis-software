import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const useEditContent = () => {
  const editId = useSelector((state) => state.editContent.id);
  const editTitle = useSelector((state) => state.editContent.title);
  const dispatch = useDispatch();

  return {editId, dispatch, editTitle};
}

export default useEditContent