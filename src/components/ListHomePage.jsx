import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  Badge,
  Typography,
  Button,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const ListHomePage = ({ onClick }) => {
  return (
    <>
      <TwitterIcon
        style={{
          position: "absolute",
          left: "25px",
          width: "35px",
          height: "35px",
          top: "20px",
          color: "white",
        }}
      />
      <List>
        <ListItem
          disablePadding
          style={{
            marginTop: "70px",
            width: "50%",
            borderRadius: "20px",
          }}
        >
          <ListItemButton
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <HomeIcon
              style={{ color: "white", width: "30px", height: "30px" }}
            />
            <div style={{ width: "100%", marginLeft: "30px" }}>
              <Typography
                color="white"
                variant="h6"
                style={{ fontWeight: "bolder" }}
              >
                Home
              </Typography>
            </div>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          style={{
            marginTop: "20px",
            width: "54%",
            borderRadius: "20px",
          }}
        >
          <ListItemButton
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TagIcon
              style={{ color: "white", width: "30px", height: "30px" }}
            />
            <div style={{ width: "100%", marginLeft: "30px" }}>
              <Typography
                color="white"
                variant="h6"
                style={{ fontWeight: "lighter" }}
              >
                Explore
              </Typography>
            </div>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          style={{
            marginTop: "20px",
            width: "73%",
            borderRadius: "20px",
          }}
        >
          <ListItemButton
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon
                style={{ color: "white", width: "30px", height: "30px" }}
              />
            </Badge>
            <div style={{ width: "100%", marginLeft: "30px" }}>
              <Typography
                color="white"
                variant="h6"
                style={{ fontWeight: "lighter" }}
              >
                Notifications
              </Typography>
            </div>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          style={{
            marginTop: "20px",
            width: "61%",
            borderRadius: "20px",
          }}
        >
          <ListItemButton
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={1} color="primary">
              <MailOutlineIcon
                style={{ color: "white", width: "30px", height: "30px" }}
              />
            </Badge>
            <div style={{ width: "100%", marginLeft: "30px" }}>
              <Typography
                color="white"
                variant="h6"
                style={{ fontWeight: "lighter" }}
              >
                Message
              </Typography>
            </div>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          style={{
            marginTop: "20px",
            width: "68%",
            borderRadius: "20px",
          }}
        >
          <ListItemButton
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BookmarksIcon
              style={{ color: "white", width: "30px", height: "30px" }}
            />
            <div style={{ width: "100%", marginLeft: "30px" }}>
              <Typography
                color="white"
                variant="h6"
                style={{ fontWeight: "lighter" }}
              >
                Bookmarks
              </Typography>
            </div>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          style={{
            marginTop: "20px",
            width: "45%",
            borderRadius: "20px",
          }}
        >
          <ListItemButton
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListAltIcon
              style={{ color: "white", width: "30px", height: "30px" }}
            />
            <div style={{ width: "100%", marginLeft: "30px" }}>
              <Typography
                color="white"
                variant="h6"
                style={{ fontWeight: "lighter" }}
              >
                Lists
              </Typography>
            </div>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          style={{
            marginTop: "20px",
            width: "50%",
            borderRadius: "20px",
          }}
        >
          <ListItemButton
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PersonOutlineIcon
              style={{ color: "white", width: "30px", height: "30px" }}
            />
            <div style={{ width: "100%", marginLeft: "30px" }}>
              <Typography
                color="white"
                variant="h6"
                style={{ fontWeight: "lighter" }}
              >
                Profile
              </Typography>
            </div>
          </ListItemButton>
        </ListItem>

        <Button
          style={{
            marginTop: "30px",
            marginLeft: "20px",
            width: "80%",
            borderRadius: "15px",
            height: "45px",
          }}
          variant="contained"
          onClick={onClick}
        >
          Post
        </Button>
      </List>
    </>
  );
};
