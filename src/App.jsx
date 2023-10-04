import { Button, Heading, InnerDiv, OuterDiv } from "./styles";
import ModalComponent from "./components/ModalComponent";
import SongComponent from "./components/SongComponent";
import { change } from "./features/show/showSlice";
import useShow from "./hooks/useShow";

function App() {
  const { show, dispatch } = useShow();

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
        {["Teddy Afro Gura Bcha", "Ed Sheeren Perfect"].map((song) => (
          <SongComponent song={song} />
        ))}
      </div>
      <ModalComponent />
    </OuterDiv>
  );
}

export default App;
