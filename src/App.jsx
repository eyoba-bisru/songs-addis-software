import { Heading, Outer } from "./styles";
import ModalComponent from "./components/ModalComponent";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <Outer>
      <Heading>Songs CRUD Application</Heading>
      <ModalComponent show={show} setShow={setShow} />
    </Outer>
  );
}

export default App;
