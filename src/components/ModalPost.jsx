import React from "react";
import { CreateTweet } from "./CreateTweet";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export const ModalPost = ({ onClose }) => {
  return (
    <div
        style={{
            width: "100%",
            height: '100vh',
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
        }}
    >
        <div
        style={{
            color: "white",
            width: "40%",
            background: "black",
            marginTop: '80px',
            position: 'relative'
        }}
        >
        <IconButton
              onClick={onClose}
              style={{ position: "absolute", right: "8px", top: "8px" }}
            >
              <CloseIcon style={{ color: "white" }} />
        </IconButton>
        <CreateTweet border/>
        </div>
    </div>
  );
};
