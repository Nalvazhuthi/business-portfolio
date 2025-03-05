import React from "react";

const About = () => {
  return (
    <div className="about">
      {/* First part: Just the title */}
      <section className="section" id="about">
        <div className="top-header">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-info">
              <h3>My introduction</h3>
              <p>
                As an experienced Full-Stack Developer, I bring a strong
                background in both frontend and backend technologies, with
                expertise in HTML, CSS, JavaScript, and React. My professional
                experience includes designing and implementing responsive web
                applications, as well as developing robust server-side solutions
                using Node.js and Express.js. I have a proven track record of
                integrating frontend and backend systems seamlessly, and I am
                proficient in database management with MongoDB.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="skills-box">
              <div className="skills-header">
                <h3>Frontend</h3>
              </div>
              <div className="skills-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>SCSS</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-header">
                <h3>Backend</h3>
              </div>
              <div className="skills-list">
                <span>NODE.JS</span>
                <span>EXPRESS.JS</span>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-header">
                <h3>Database</h3>
              </div>
              <div className="skills-list">
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
