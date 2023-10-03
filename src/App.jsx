import { Button, Heading, InnerDiv, OuterDiv } from "./styles";
import ModalComponent from "./components/ModalComponent";
import { useState } from "react";

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
          <img src="/src/assets/plus.svg" alt="plus" />
        </Button>
      </InnerDiv>
      <ModalComponent show={show} setShow={setShow} />
    </OuterDiv>
  );
}

export default App;
