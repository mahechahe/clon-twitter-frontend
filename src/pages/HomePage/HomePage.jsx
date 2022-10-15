import { Modal } from "@mui/material";
import React, { useState } from "react";
import { CreateTweet } from "../../components/CreateTweet";
import { ListHomePage } from "../../components/ListHomePage";
import { ModalPost } from "../../components/ModalPost";
import { NewPost } from "../../components/NewPost";
import { SectionSearchRight } from "../../components/SectionSearchRight";

export const HomePage = () => {
  const [openModalPost, setOpenModalPost] = useState(false);
  const handleClick = () => {
    setOpenModalPost(true);
  };

  return (
    <div
      style={{
        background: "black",
        display: "grid",
        gridTemplateColumns: "0.7fr 1fr 0.7fr",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "black",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "20%",
            height: "100%",
            paddingLeft: "10px",
            position: "fixed",
          }}
        >
          <ListHomePage onClick={handleClick} />
        </div>
      </div>

      <div
        style={{
          background: "black",
          borderLeft: "1px solid rgb(113, 118, 123)",
          borderRight: "1px solid rgb(113, 118, 123)",
        }}
      >
        <CreateTweet
          openModalPost={openModalPost}
          setOpenModalPost={setOpenModalPost}
        />
        <NewPost />
        <NewPost />
        <Modal open={openModalPost} onClose={() => setOpenModalPost(false)}>
          <ModalPost onClose={() => setOpenModalPost(false)} />
        </Modal>
      </div>

      <div style={{ background: "black" }}>
        <SectionSearchRight />
      </div>
    </div>
  );
};
