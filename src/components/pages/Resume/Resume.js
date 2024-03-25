//Imports
import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "./Resume.css";

// Function that renders the downloadable resume, proficiencies & exports
export default function Resume() {
  return (
    <Box>
      <div>
        {/* {/* <a RESUME TO BE ADDED LATER
          href={PdfFile}
          download="Benjamin Cullen Resume"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        > }
          <Button id="resume-button" className="pop-on-hover">
            Click Here to Download My Resume
          </Button>
        </a> */}
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Front-end Expertise
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
          <br></br>- Tailwind
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back-end Expertise
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "80px",
          }}
        >
          - HTML
          <br></br>- API's
          <br></br>- GraphQL
          <br></br>- Express
          <br></br>- MySQL
          <br></br>- Sequelize
          <br></br>- MongoDB
          <br></br>- Mongoose
          <br></br>- Bootstrap
          <br></br>- REST
          <br></br>- Node 
        </p>
      </div>
    </Box>
  );
}
