import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { aboutData } from "../Helpers/aboutData";
export default function About() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <Avatar
          src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg"
          alt="Profile Image"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          marginTop: "1rem",
          fontFamily: "'Courgette', cursive",
        }}
      >
        Sakshi Joshi
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          display: "grid",
          marginTop: "0.5rem",
          fontFamily: "'Courgette', cursive",
          color:"white"
        }}
      >
        Hello, I am Sakshi. I am a Software Engineer Trainee at Precious
        Infosystem Pvt. Ltd. <br />I live in India. I have my interest in
        coding.My hobby is Travelling and cooking.
        <br />
        I have done my graduation from Holkar Science College <br />
        and Post Graduation from IPS Academy.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "50%" }}
        >
          <List sx={{ bgcolor: "White" }}>
            {aboutData.slice(0, 4).map((item, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "50%" }}
        >
          <List sx={{ bgcolor: "White" }}>
            {aboutData.slice(4).map((item, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </>
  );
}
