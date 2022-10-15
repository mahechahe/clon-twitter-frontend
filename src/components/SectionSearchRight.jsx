import { IconButton, List, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState } from "react";
import { CardFollow } from "./CardFollow";

export const SectionSearchRight = () => {
  const [searchPost, setSearchPost] = useState("");

  return (
    <div
      style={{
        width: "24%",
        height: "100%",
        paddingLeft: "30px",
        position: "fixed",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "#202327",
          height: "48px",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "relative",
        }}
      >
        <IconButton style={{ position: "absolute", left: "10px" }}>
          <SearchIcon style={{ color: "#119afb" }} />
        </IconButton>
        <input
          type="text"
          style={{
            width: "100%",
            height: "100%",
            background: "none",
            color: "white",
            border: "1px solid #119afb",
            fontSize: "17px",
            borderRadius: "30px",
            paddingLeft: "50px",
          }}
          value={searchPost}
          placeholder="Search a post"
          onChange={(e) => setSearchPost(e.target.value)}
        />
        {searchPost.length > 0 && (
          <IconButton
            style={{ position: "absolute", right: "10px" }}
            onClick={() => setSearchPost("")}
          >
            <CancelIcon style={{ color: "#119afb" }} />
          </IconButton>
        )}
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          minHeight: "200px",
          background: "rgb(22, 24, 28)",
          marginTop: "30px",
          borderRadius: "15px",
          paddingTop: "15px",
          paddingBottom: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          color={"white"}
          variant="h6"
          fontWeight={"bold"}
          style={{ marginLeft: "15px", marginBottom: "10px" }}
        >
          Who to follow
        </Typography>
        <List style={{ padding: "0" }}>
          <CardFollow />
          <CardFollow />
          <CardFollow />
          <CardFollow />
        </List>
      </div>
    </div>
  );
};
