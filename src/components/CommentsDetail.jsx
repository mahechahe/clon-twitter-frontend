import { Avatar, Typography } from "@mui/material";
import React from "react";
import avatar from "../assets/avatar.jpg";

export const CommentsDetail = () => {
    
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100px",
        height: 'auto',
        marginTop: "20px",
        borderTop: "1px solid rgb(113, 118, 123)",
        borderBottom: "1px solid rgb(113, 118, 123)",
        display: "grid",
        gridTemplateColumns: "0.2fr 1fr",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <Avatar
          src={avatar}
          alt="avatar"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div
        style={{  display: "flex", flexDirection: "column", justifyContent: 'center' }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={"semi-bold"}
          color="rgb(113, 118, 123)"
        >
          @TuMenteTeMiente · 1h
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight={"semi-bold"}
          color="rgb(113, 118, 123)"
        >
          Replying to <span style={{ color: "#119afb" }}>@NavisCode</span>
        </Typography>
        <Typography color={"white"}>Donde es el programa?</Typography>
      </div>
    </div>
  );
};
