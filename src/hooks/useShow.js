import { useDispatch, useSelector } from 'react-redux';

const useShow = () => {
  const show = useSelector((state) => state.show.value);
  const dispatch = useDispatch();

  return {show, dispatch}
}

export default useShow