import { Typography, Avatar, IconButton, Button } from "@mui/material";
import avatar from "../assets/avatar.jpg";
import React, { useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export const CreateTweet = ({border}) => {
  const intialState = {
    description: "",
    category: "",
    selectedFile: "",
  }

  console.log(border);
  
  const [post, setPost] = useState(intialState);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleCkick = () => {
    console.log(post);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        borderBottom: `${!border && "1px solid rgb(113, 118, 123)"}`,
        padding: "10px 15px",
        border: `${border && "1px solid rgb(113, 118, 123)"}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography color={"white"} variant="h6">
        Latest Posts
      </Typography>
      <div
        style={{
          width: "100%",
          height: "190px",
          display: "grid",
          gridTemplateColumns: "0.2fr 1fr",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={avatar}
            alt="avatar"
            style={{ width: "50px", height: "50px", marginTop: "10px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "12px",
          }}
        >
          <textarea
            style={{
              width: "100%",
              height: "120px",
              padding: "5px",
              color: "white",
              background: "none",
              fontSize: "16px",
              border: "2px solid rgb(113, 118, 123)",
              borderRadius: "5px",
            }}
            placeholder="Que estas pensando?"
            name="description"
            value={post.description}
            onChange={handleChange}
          />

          <div
            style={{
              width: "100%",
              height: "40px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  name="selectedFile"
                  value={post.selectedFile}
                  onChange={handleChange}
                />
                <InsertPhotoIcon style={{ width: "27px", height: "27px" }} />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <GifBoxIcon style={{ width: "27px", height: "27px" }} />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <EmojiEmotionsIcon style={{ width: "27px", height: "27px" }} />
              </IconButton>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                style={{
                  width: "130px",
                  borderRadius: "15px",
                  height: "34px",
                  opacity: `${post.description.length === 0 ? '0.6' : '1'}`,
                }}
                onClick={handleCkick}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
