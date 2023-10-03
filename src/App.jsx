import { Button, Buttons, Heading, InnerDiv, OuterDiv, Song } from "./styles";
import ModalComponent from "./components/ModalComponent";
import { useState } from "react";
import SongComponent from "./components/SongComponent";

function App() {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
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
      <ModalComponent show={show} setShow={setShow} />
    </OuterDiv>
  );
}

export default App;
