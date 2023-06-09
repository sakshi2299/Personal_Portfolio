import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { servicesData } from "../config/servicesData";
import Avatar from "@mui/material/Avatar";
export default function Services() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ marginTop: "10rem", marginLeft: "5rem", fontFamily: "'Courgette', cursive",color:"white" }}
      >
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
        {servicesData.map((service, index) => (
          <CardActionArea key={index}>
            <CardContent>
              <Avatar>{service.icon}</Avatar>
              <Typography gutterBottom variant="h5" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'Courgette', cursive" }}>
                {service.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        ))}
      </Card>
    </>
  );
}

