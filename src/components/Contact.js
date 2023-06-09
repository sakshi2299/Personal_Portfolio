import { Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { educationData } from "../Helpers/educationData";
export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1, marginLeft: "50px", marginTop: "5rem" }}>
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "'Courgette', cursive" ,color:"white"}}
            >
              Contact
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{ mt: 2, fontFamily: "'Courgette', cursive" ,color:"white"}}
          >
            Get in touch
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 , color:"white" }}>
            Please fill out the form on this section to contact with me.
            <br /> Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
            Friday
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              name="name"
              label="Name"
              sx={{ width: "30%", fontSize: "1.2rem"}}
            />
            <Box sx={{ mt: 2 }}>
              <TextField
                name="email"
                label="Email"
                sx={{ width: "30%", fontSize: "1.2rem" }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                name="message"
                label="Message"
                multiline
                rows={4}
                sx={{ width: "30%", fontSize: "1.2rem" }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button type="submit" variant="contained">
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ marginTop: "15rem", marginRight: "20rem" }}>
            <Typography
              variant="h3"
              sx={{ textAlign: "right", fontFamily: "'Courgette', cursive" }}
            >
              My Education
            </Typography>
            <Timeline align="alternate">
              {educationData.map((education, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color={index === 2 ? "secondary" : "primary"}
                    />
                    {index < educationData.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>{`${education.title}, ${education.institute}`}</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Box>
      </Box>
    </>
  );
}
