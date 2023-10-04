import React from "react";
import { Buttons, Song } from "../styles";
import { changeEdit } from "../features/edit/editSlice";
import { change } from "../features/show/showSlice";
import useEdit from "../hooks/useEdit";
import axios from "axios";
import { getSongsFetch } from "../features/song/songsSlice";

const SongComponent = ({ song }) => {
  const { edit, dispatch } = useEdit();

  const handleEdit = () => {
    dispatch(changeEdit());
    dispatch(change());
  };

  const handleDelete = () => {
    axios
      .delete(
        `https://test-addis-software-backend.onrender.com/api/v1/songs/${song._id}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    dispatch(getSongsFetch());
  };

  return (
    <Song>
      <p>{song.title}</p>
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
        <Buttons onClick={handleDelete}>
          <img src="/assets/delete.svg" alt="delete-icon" />
        </Buttons>
      </div>
    </Song>
  );
};

export default SongComponent;
