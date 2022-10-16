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
import { CardProfile } from "./CardProfile";

const listNavigate = [
  {
    icon: <HomeIcon style={{color: 'white', width: '30px', height: '30px'}}/>,
    text: "Home",
  },
  {
    icon: <TagIcon style={{color: 'white', width: '30px', height: '30px'}}/>,
    text: "Explore",
  },
  {
    icon: <NotificationsNoneIcon style={{color: 'white', width: '30px', height: '30px'}}/>,
    text: "Notifications",
  },
  {
    icon: <MailOutlineIcon style={{color: 'white', width: '30px', height: '30px'}}/>,
    text: "Message",
  },
  {
    icon: <BookmarksIcon style={{color: 'white', width: '30px', height: '30px'}}/>,
    text: "Bookmarks",
  },
  {
    icon: <ListAltIcon style={{color: 'white', width: '30px', height: '30px'}}/>,
    text: "List",
  },
  {
    icon: <PersonOutlineIcon style={{color: 'white', width: '30px', height: '30px'}}/>,
    text: "Profile",
  },
];

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
        {listNavigate.map((list, i) => (
          <ListItem
            disablePadding
            style={{
              marginTop: `${i === 0 ? "70px" : "15px"}`,
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
              {list.icon}
              <div style={{ width: "100%", marginLeft: "30px" }}>
                <Typography
                  color="white"
                  variant="h6"
                  style={{ fontWeight: `${i === 0 ? 'bolder' : 'lighter'}` }}
                >
                  {list.text}
                </Typography>
              </div>
            </ListItemButton>
          </ListItem>
        ))}

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
        <CardProfile />
      </List>
    </>
  );
};
