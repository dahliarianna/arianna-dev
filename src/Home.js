import React, { useState } from "react";
import neonlogo from "./assets/neonlogo.png";
import art8 from "./assets/art8.JPG";
import birthday from "./assets/birthday.JPG";
import ramen from "./assets/ramen.JPG";
// import grainybackground from '../public/grainybackground.png'

function Home() {
  const [showProj, setShowProj] = useState(true);
  const [showProj1, setShowProj1] = useState(true);
  const [showProj2, setShowProj2] = useState(true);
  const [showProj3, setShowProj3] = useState(true);

  const showProject = () => {
    setShowProj((prevShown) => !prevShown);
  };
  const showProject1 = () => {
    setShowProj1((prevShown) => !prevShown);
  };
  const showProject2 = () => {
    setShowProj2((prevShown) => !prevShown);
  };
  const showProject3 = () => {
    setShowProj3((prevShown) => !prevShown);
  };

  const technologies = [
    "JavaScript",
    "React",
    "NodeJS",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "WebSocket",
    "Tailwind CSS",
    "HTML/CSS",
    "TypeScript",
    "AWS",
    "Git",
    "GitHub",
  ];

  return (
    <div className="homePage">
      <div className="logo">
        <img src={neonlogo} alt="logo" className="actualLogo" />
      </div>
      <div className="bodyContent">
        <div className="intro">
          <h2>Hi, I'm Arianna</h2>
          <h1>
            an enthusiastic software engineer experienced in full-stack
            JavaScript development.
          </h1>
        </div>
        <div className="skills">
          <h2>SKILLS</h2>
          {technologies.map((tech, index) => (
            <button
              key={index}
              className="floating-button"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="projects">
          <h2>PRODUCTS & PROJECTS </h2>
          <div className="projectNames">
            <button onClick={showProject}>
              <p className="projectTitle">CNCTN</p>
              <div hidden={showProj} className="projectContent">
                <p className="projectDescriptions">
                  A social-media-like platform featuring live chat functionality
                  along with the ability to share photos and other content.
                </p>
                <p className="projectDescriptions">
                  Technologies: JavaScript, Typescript, React, NodeJS, Express,
                  PostgreSQL, Socket.io, AWS(SDK, S3), Bootstrap, HTML, CSS
                </p>
                <a
                  href="https://cnctn-app-81c9361a875e.herokuapp.com/"
                  target="blank"
                >
                  VISIT
                </a>
              </div>
            </button>
            <button onClick={showProject1}>
              <p className="projectTitle">SERENE</p>
              <div hidden={showProj1} className="projectContent">
                <p className="projectDescriptions">
                  An all-in-one tool designed to monitor and manage the health
                  of AWS Lambda functions.
                </p>
                <p className="projectDescriptions">
                  Technologies: JavaScript, Typescript, React, NodeJS, Express,
                  MongoDB, AWS(EC2, Lambda, Cloudwatch, CloudFormation),
                  TailwindCSS, ChartJS, HTML, CSS
                </p>
                <a
                  href="http://sereneapp-env.eba-apknajw6.us-east-1.elasticbeanstalk.com/"
                  target="blank"
                >
                  VISIT
                </a>
              </div>
            </button>
            <button onClick={showProject2}>
              <p className="projectTitle">PLANTDADDY</p>
              <div hidden={showProj2} className="projectContent">
                <p className="projectDescriptions">
                  Dashboard for plant care with SMS reminders.
                </p>
                <p className="projectDescriptions">
                  Technologies: JavaScript, React, NodeJS, Express, MongoDB,
                  Twilio, HTML, SCSS, CSS,
                </p>
                <a
                  href="https://github.com/CTRI-17-Scratch-Project/scratch-project"
                  target="blank"
                >
                  VISIT
                </a>
              </div>
            </button>
            <button onClick={showProject3}>
              <p className="projectTitle">BUDDY-STEPS</p>
              <div hidden={showProj3} className="projectContent">
                <p className="projectDescriptions">
                  Individual and team task tracker.
                </p>
                <p className="projectDescriptions">
                  Technologies: JavaScript, React, NodeJS, Express, PostgreSQL,
                  HTML, SCSS, CSS,
                </p>
                <a
                  href="https://github.com/CTRI17-Danger-Noodles/Buddy-Steps"
                  target="blank"
                >
                  VISIT
                </a>
              </div>
            </button>
          </div>
        </div>
        <div className="aboutme">
          <h2>ABOUT</h2>
          <div className="aboutmeContent">
            <p>
              I’m a full stack software engineer located in Houston, TX,
              specializing in React and Node. Before programming, I have always
              found my creative side in traditional arts such as painting and
              drawing, but little did I know that transitioning into coding
              would be an extension of that creativity. I realized that behind
              every line of code lies an opportunity for artistic expression — a
              chance to combine my creative thinking with logical
              problem-solving skills to create something not just visually
              appealing, but also practical and functional.
            </p>
            <div className="imageDiv">
              <img src={art8} alt="art8" />
              <img src={birthday} alt="birthday" />
              <img src={ramen} alt="ramen" />
            </div>
          </div>
        </div>
        <div className="contact">
          <h2>CONTACT</h2>
          <div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/ariannanguyen/"
                target="blank"
              >
                linkedin
              </a>
              <a href="https://github.com/dahliarianna" target="blank">
                github
              </a>
            </div>
          </div>
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
