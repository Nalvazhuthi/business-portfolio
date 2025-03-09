import { useState } from "react";
import { Logo } from "../../assets/icons/svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home"); // Track active section

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(id); // Update active section
    setIsOpen(false);
  };

  return (
    <div className="navBar">
      <div className="logo">
        <Logo />
      </div>
      <div className={`nav-options ${isOpen ? "open" : ""}`}>
        {["home", "about", "services", "works", "contact"].map((item) => (
          <div
            key={item}
            className={`options ${activeSection === item ? "active" : ""}`}
            onClick={() => handleNavClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </div>
        ))}
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;

