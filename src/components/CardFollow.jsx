import React from "react";
import { ListItemButton, ListItem, Button, Typography } from "@mui/material";
import avatar from "../assets/avatar.jpg";

export const CardFollow = () => {
  return (
    <ListItem
      disablePadding
      style={{
        width: "100%",
        height: "65px",
        marginTop: '20px'
      }}
    >
      <ListItemButton
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "0.4fr 1fr 0.6fr",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            style={{ width: "80%", height: "100%", borderRadius: "50%" }}
          />
        </div>

        <div style={{ height: "100%" }}>
            <Typography color={'white'} fontWeight='bold'>Bancolombia</Typography>
            <Typography color={'rgb(113, 118, 123)'}>@Bancolombia</Typography>
        </div>

        <div >
          <Button
            variant="contained"
            size="small"
            style={{ width: "100%", background: "white", color: "black", borderRadius: '60px' }}
          >
            Seguir
          </Button>
        </div>
      </ListItemButton>
    </ListItem>
  );
};
