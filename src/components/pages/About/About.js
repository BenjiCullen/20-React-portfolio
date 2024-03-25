//Imports
import React from "react";
import "./About.css";
import hero from "../../../images/HeroImage.jpg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={hero}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
          Howdy! I am Benjamin Cullen and I am a junior full stack software developer with a unique background in
          hospitality that has taken me all around Australia, working with a varitey of
          different colleges and clientele. Having worked in such an industry all through
          the pandemic and for most of my working life has given me the dexterity to adapt,
          learn new skills, then perfect and add my own flare to make it my own.
             
          
        </p>
        <p id="p-about">
        Software development has always been a field that has fascinated me, but i have never taken the plunge 
        to turn it into a career. Enrolling into the Adelaide universities full stack software development program
        has given me the skills and the creativity aspect to pursue something i am truly passionate about.

        </p>
        <p id="p-about">
        I love working in a team and having other colleges that i am able to learn from to perfect my craft to make
        somthing i am proud of.
        The opportunity to work with professionals that have been in the industry would be a dream come true. 
        </p>
        <p id="p-about">
       
        </p>
      </div>
    </>
  );
}
