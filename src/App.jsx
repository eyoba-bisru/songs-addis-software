import { Button, Heading, InnerDiv, OuterDiv } from "./styles";
import ModalComponent from "./components/ModalComponent";
import SongComponent from "./components/SongComponent";
import { change } from "./features/show/showSlice";
import useShow from "./hooks/useShow";
import { useEffect } from "react";
import { getSongsFetch } from "./features/song/songSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { dispatch } = useShow();
  const songs = useSelector((state) => state.song.value);
  const isLoading = useSelector((state) => state.song.isLoading);

  useEffect(() => {
    dispatch(getSongsFetch());
  }, []);

  const handleOpen = () => {
    dispatch(change());
  };

  return (
    <OuterDiv>
      <Heading>Songs CRUD Application</Heading>
      <InnerDiv>
        <h2>List of Songs</h2>
        <Button onClick={handleOpen}>
          <p>Create</p>
          <img src="/assets/plus.svg" alt="plus" />
        </Button>
      </InnerDiv>
      <div>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          songs.map((song) => <SongComponent song={song.title} />)
        )}
      </div>
      <ModalComponent />
    </OuterDiv>
  );
}

export default App;
