import { Button, Heading, InnerDiv, OuterDiv } from "./styles";
import ModalComponent from "./components/ModalComponent";
import SongComponent from "./components/SongComponent";
import { change } from "./features/show/showSlice";
import useShow from "./hooks/useShow";
import useSong from "./hooks/useSong";

function App() {
  const { dispatch } = useShow();
  const { songs, isLoading } = useSong();

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
          songs.map((song) => (
            <SongComponent key={song._id} song={song.title} />
          ))
        )}
      </div>
      <ModalComponent songs={songs} />
    </OuterDiv>
  );
}

export default App;
