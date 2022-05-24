import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">ABOUT US</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dajjva0yd/image/upload/v1653416153/products/adminn_m4gbw3.webp"
              alt="Founder"
            />
            <Typography>Made By Yash Nigam and Pawan Pandey</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a Ecommerce website(EXPRESS-DEAL) made by Yash and Pawan. It is 
              made with help of MERN Stack
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">OUR BRANDS</Typography>
            <a
              href="https://twitter.com/"
              target="blank"
            >
              <TwitterIcon className="twitterSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
