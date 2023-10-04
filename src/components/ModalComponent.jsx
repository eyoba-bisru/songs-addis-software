import React from "react";
import { Button, CloseImage, Container, Form, Input, Modal } from "../styles";
import { change } from "../features/show/showSlice";
import useShow from "../hooks/useShow";
import useEdit from "../hooks/useEdit";

const ModalComponent = () => {
  const { show, dispatch } = useShow();
  const { edit } = useEdit();

  const handleClose = () => {
    dispatch(change());
  };

  return (
    <Modal show={show}>
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input placeholder="title" type="text" />
          {edit ? <Button>Edit</Button> : <Button>Add</Button>}
        </Form>
        <CloseImage onClick={handleClose} src="/assets/close.svg" alt="close" />
      </Container>
    </Modal>
  );
};

export default ModalComponent;
