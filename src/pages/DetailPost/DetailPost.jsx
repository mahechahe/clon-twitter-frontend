import React from "react";
import { ListHomePage } from "../../components/ListHomePage";
import { NewPost } from "../../components/NewPost";
import { SectionSearchRight } from "../../components/SectionSearchRight";

export const DetailPost = () => {
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
          <ListHomePage onClick={() => {}} />
        </div>
      </div>
      <div
        style={{
          background: "black",
          borderLeft: "1px solid rgb(113, 118, 123)",
          borderRight: "1px solid rgb(113, 118, 123)",
        }}
      >
        <NewPost detail/>
      </div>
      <div style={{ background: "black" }}>
        <SectionSearchRight />
      </div>
    </div>
  );
};
