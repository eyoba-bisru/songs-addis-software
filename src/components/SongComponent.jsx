import React from "react";
import { Buttons, Song } from "../styles";

const SongComponent = ({ song }) => {
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
        <Buttons>
          <img src="/src/assets/edit.svg" alt="edit-icon" />
        </Buttons>
        <Buttons>
          <img src="/src/assets/delete.svg" alt="delete-icon" />
        </Buttons>
      </div>
    </Song>
  );
};

export default SongComponent;
