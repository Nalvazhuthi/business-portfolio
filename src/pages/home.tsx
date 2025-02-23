import React from "react";
import { Dribbble, Instagram, LinkedIm, Twitter } from "../assets/icons/svg";

const Home = () => {
  const socialApps = [
    {
      logo: <Instagram />,
      link: "",
    },
    {
      logo: <Twitter />,
      link: "",
    },
    {
      logo: <Dribbble />,
      link: "",
    },
    {
      logo: <LinkedIm />,
      link: "",
    },
  ];
  return (
    <div className="home">
      <div className="homeContent">
        <h2>
          I am Nalvazhuthi<span></span>
        </h2>
        <h1>Web Developer</h1>
        <div className="businessDetails">
          As a passionate web developer, I specialize in creating responsive and
          engaging websites. With experience in both front-end and back-end
          development, I can help bring your ideas to life, whether you're
          looking for a simple landing page or a full-scale web application.
          Let’s create something amazing together!
        </div>
        <div className="socialLinks">
          {socialApps.map((apps, id) => (
            <div className="logo">{apps.logo}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
