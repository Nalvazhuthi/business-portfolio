import React from "react";

interface Work {
  id: number;
  title: string;
  description: string;
  link: string;
}

const Works: React.FC = () => {
  const works: Work[] = [
    {
      id: 1,
      title: "3D Interactive Scene",
      description: "A React Three Fiber project with user-selected points and shape generation.",
      link: "https://yourprojectlink.com",
    },
    {
      id: 2,
      title: "Authentication System",
      description: "A full-stack authentication system with login, signup, and logout functionality.",
      link: "https://yourprojectlink.com",
    },
    {
      id: 3,
      title: "Freelance Portfolio",
      description: "A personal portfolio showcasing my web development projects and UI/UX work.",
      link: "https://yourportfolio.com",
    },
  ];

  return (
    <div className="works section" id="works">
      <h1>My Works</h1>
      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
