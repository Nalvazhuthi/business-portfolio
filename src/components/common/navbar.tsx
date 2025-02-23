import React, { useState } from "react";
import { Logo } from "../../assets/icons/svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar">
      <div className="logo">
        <Logo />
      </div>
      <div className={`nav-options ${isOpen ? "open" : ""}`}>
        <div className="options">Home</div>
        <div className="options">About</div>
        <div className="options">Resume</div>
        <div className="options">Services</div>
        <div className="options">Contact</div>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;
