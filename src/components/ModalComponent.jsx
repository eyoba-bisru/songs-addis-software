import React, { useEffect, useState } from "react";
import { Button, CloseImage, Container, Form, Input, Modal } from "../styles";
import { change } from "../features/show/showSlice";
import useShow from "../hooks/useShow";
import useEdit from "../hooks/useEdit";
import { changeEdit } from "../features/edit/editSlice";
import axios from "axios";
import { getSongsFetch } from "../features/song/songsSlice";
import useEditContent from "../hooks/useEditContent";
import { changeEditContent } from "../features/edit/editContentSlice";

const ModalComponent = () => {
  const { show, dispatch } = useShow();
  const { edit } = useEdit();
  const { editId, editTitle } = useEditContent();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(editTitle);
  }, [edit]);

  const handleClose = () => {
    edit && dispatch(changeEdit());
    dispatch(change());
    dispatch(changeEditContent({ id: "", title: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      axios
        .post("https://test-addis-software-backend.onrender.com/api/v1/songs", {
          title,
        })
        .then((res) => {
          setTitle("");
          dispatch(change());
          dispatch(getSongsFetch());
        })
        .catch((err) => {
          console.log(err.code);
        });
    } else {
      axios
        .put(
          `https://test-addis-software-backend.onrender.com/api/v1/songs/${editId}`,
          { title }
        )
        .then((res) => {
          dispatch(changeEditContent({ id: "", title: "" }));
          dispatch(change());
          dispatch(changeEdit());
          dispatch(getSongsFetch());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Modal show={show}>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {console.log(edit)}
          <Button>{edit ? "Edit" : "Add"}</Button>
        </Form>
        <CloseImage onClick={handleClose} src="/assets/close.svg" alt="close" />
      </Container>
    </Modal>
  );
};

export default ModalComponent;
