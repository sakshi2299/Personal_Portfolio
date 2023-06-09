import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import Avatar from "@mui/material/Avatar";
export default function ActionAreaCard() {
  return (
    <>
      <Typography variant="h3" sx={{ marginTop: "10rem", marginLeft: "5rem" ,fontFamily: "'Courgette', cursive"}}>
        Services
      </Typography>

      <Card
        sx={{
          marginTop: "10rem",
          padding: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

        }}
      >
        <CardActionArea>
          <CardContent>
            <Avatar>
              <LaptopIcon />
            </Avatar>
            <Typography gutterBottom variant="h5" component="div">
              Web developer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: "'Courgette', cursive",}}>
              A web developer is a programmer who develops World Wide Web
              applications using a client–server model. The applications
              typically use HTML, CSS, and JavaScript in the client, and any
              general-purpose programming language in the server. HTTP is used
              for communications between client and server.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardContent>
            <Avatar>
              <LaptopIcon />
            </Avatar>
            <Typography gutterBottom variant="h5" component="div">
              Full Stack Developer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: "'Courgette', cursive",}}>
              A full stack developer works with the front-end and back-end of a
              website or an application. He or she handles projects anywhere
              from database design, user interface design, and development.
              During a project's planning phase, he or she may work directly
              with clients to understand project deliverables.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardContent>
            <Avatar>
              <LaptopIcon />
            </Avatar>
            <Typography gutterBottom variant="h5" component="div">
              React developer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: "'Courgette', cursive",}}>
              A React developer is responsible for the design and implementation
              of user interfaces (UIs) and UI components using React, a
              front-end JavaScript library. They develop and maintain UIs for
              web and mobile apps.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}