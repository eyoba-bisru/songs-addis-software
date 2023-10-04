import React from "react";
import { Buttons, Song } from "../styles";
import { changeEdit } from "../features/edit/editSlice";
import { change } from "../features/show/showSlice";
import useEdit from "../hooks/useEdit";

const SongComponent = ({ song }) => {
  const { edit, dispatch } = useEdit();

  const handleEdit = () => {
    dispatch(changeEdit());
    dispatch(change());
  };

  return (
    <Song>
      <p>{song}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <Buttons onClick={handleEdit}>
          <img src="/assets/edit.svg" alt="edit-icon" />
        </Buttons>
        <Buttons>
          <img src="/assets/delete.svg" alt="delete-icon" />
        </Buttons>
      </div>
    </Song>
  );
};

export default SongComponent;
