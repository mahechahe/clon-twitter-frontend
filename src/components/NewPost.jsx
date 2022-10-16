import React, { useState } from "react";
import avatar from "../assets/avatar.jpg";
import { Avatar, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CommentsDetail } from "./CommentsDetail";
import { useNavigate } from "react-router-dom";

export const NewPost = ({ detail }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate()
  console.log(detail);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        minHeight: "200px",
        borderBottom: "1px solid rgb(113, 118, 123)",
        padding: "10px 15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {detail && (
        <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            marginBottom: '20px'
          }}
        >
          <IconButton onClick={() => navigate('/home')}>
            <ArrowBackIcon style={{ color: "white", marginRight: "21px" }} />
          </IconButton>
          <Typography variant="h6" color={"white"} fontWeight="bold">
            Post
          </Typography>
        </div>
      )}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: `${detail ? "flex" : "grid"}`,
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
          <Typography
            variant="subtitle1"
            fontWeight={"semi-bold"}
            color="white"
          >
            Freddy Vega{" "}
            <span style={{ color: "rgb(113, 118, 123)" }}>@freddier · 1h</span>
          </Typography>
          <Typography color={"white"}>
            Que maravilla. <br />
            Alemania iba a pagar $400M euros por renovar los certificados de
            cifrado de dispositivos clínicos. El grupo de hackers CCC lo hizo
            gratis sin cambiar mucho y ofrece ayuda a los hospitales para
            actualizar las máquinas 🤘
          </Typography>
          <figure style={{ width: "100%", marginTop: "10px" }}>
            <img
              style={{ width: "100%" }}
              src="https://pbs.twimg.com/media/FevalvvX0BIxInd?format=png&name=small"
              alt=""
            />
          </figure>
          {detail && (
            <div
              style={{
                borderTop: "1px solid rgb(113, 118, 123)",
                borderBottom: "1px solid rgb(113, 118, 123)",
                width: "100%",
                height: "50px",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography style={{ marginRight: "20px" }} color={"white"}>
                5 <span style={{ color: "rgb(113, 118, 123)" }}>Reposts</span>
              </Typography>
              <Typography color={"white"}>
                18 <span style={{ color: "rgb(113, 118, 123)" }}>Likes</span>
              </Typography>
            </div>
          )}
          <div
            style={{
              width: "100%",
              height: "40px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => setLiked(!liked)}>
              {liked ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgb(249, 24, 128)",
                    fontSize: "17px",
                  }}
                >
                  <FavoriteIcon
                    style={{ color: "rgb(249, 24, 128)", marginRight: "10px" }}
                  />{" "}
                  8
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgb(113, 118, 123)",
                    fontSize: "17px",
                  }}
                >
                  <FavoriteBorderIcon
                    style={{ color: "rgb(113, 118, 123)", marginRight: "10px" }}
                  />{" "}
                  8
                </span>
              )}
            </IconButton>
            <IconButton>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(113, 118, 123)",
                  fontSize: "17px",
                }}
              >
                <TextsmsIcon
                  style={{ color: "rgb(113, 118, 123)", marginRight: "10px" }}
                />{" "}
                8
              </span>
            </IconButton>
            <IconButton>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(113, 118, 123)",
                  fontSize: "17px",
                }}
              >
                <SendIcon
                  style={{ color: "rgb(113, 118, 123)", marginRight: "10px" }}
                />{" "}
                8
              </span>
            </IconButton>
          </div>
          {detail && (
            <CommentsDetail />
          )}
        </div>
      </div>
    </div>
  );
};
