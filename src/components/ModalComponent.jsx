import React, { useState } from "react";
import { Button, CloseImage, Container, Form, Input, Modal } from "../styles";

const ModalComponent = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
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
          <Button>Add</Button>
        </Form>
        <CloseImage onClick={handleClose} src="/src/assets/close.svg" />
      </Container>
    </Modal>
  );
};

export default ModalComponent;
