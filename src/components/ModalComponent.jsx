import React, { useState } from "react";
import { Button, CloseImage, Container, Form, Input, Modal } from "../styles";
import { change } from "../features/show/showSlice";
import useShow from "../hooks/useShow";
import useEdit from "../hooks/useEdit";
import toast, { Toaster, useToaster } from "react-hot-toast";
import { changeEdit } from "../features/edit/editSlice";
import axios from "axios";
import { getSongsFetch } from "../features/song/songsSlice";

const ModalComponent = () => {
  const { show, dispatch } = useShow();
  const { edit } = useEdit();
  const [title, setTitle] = useState("");

  const handleClose = () => {
    dispatch(change());
    dispatch(changeEdit());
  };

  return (
    <Modal show={show}>
      <Toaster />
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (!edit) {
              axios
                .post(
                  "https://test-addis-software-backend.onrender.com/api/v1/songs",
                  { title }
                )
                .then((res) => {
                  toast.success("Successfully added");
                  dispatch(change());
                  dispatch(getSongsFetch());
                })
                .catch((err) => toast.error("Error"));
            }
          }}
        >
          <Input
            placeholder="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {edit ? <Button>Edit</Button> : <Button>Add</Button>}
        </Form>
        <CloseImage onClick={handleClose} src="/assets/close.svg" alt="close" />
      </Container>
    </Modal>
  );
};

export default ModalComponent;
