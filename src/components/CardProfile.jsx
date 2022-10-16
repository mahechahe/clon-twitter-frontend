import { Avatar, Typography, IconButton } from "@mui/material";
import React from "react";
import avatar from "../assets/avatar.jpg";
import SettingsIcon from "@mui/icons-material/Settings";

export const CardProfile = () => {
  return (
    <div
      style={{
        width: "90%",
        height: "60px",
        marginLeft: "20px",
        marginTop: "30px",
        display: "flex",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={avatar}
          alt="avatar"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div
        style={{
          width: "130px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
        }}
      >
        <Typography color={"white"}>Estiven Mahecha</Typography>
        <Typography color={"rgb(113, 118, 123)"}>@henao_mahecha</Typography>
      </div>
      <div
        style={{
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
        }}
      >
        <IconButton>
          <SettingsIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
};
