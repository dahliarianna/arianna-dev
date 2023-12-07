import React, { useState } from "react";

const Projects = () => {
  const [showProj, setShowProj] = useState(true);
  const [showProj1, setShowProj1] = useState(true);
  const [showProj2, setShowProj2] = useState(true);

  const showProject = () => {
    setShowProj((prevShown) => !prevShown);
  };
  const showProject1 = () => {
    setShowProj1((prevShown) => !prevShown);
  };
  const showProject2 = () => {
    setShowProj2((prevShown) => !prevShown);
  };
  return (
    <div>
      <div className="projects">
        <h2>PRODUCTS & PROJECTS</h2>
        <div className="projectNames">
          <button onClick={showProject}>
            CNCTN
            <div hidden={showProj}>
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
            SERENE
            <div hidden={showProj1}>
              <p className="projectDescriptions">
                An all-in-one tool designed to monitor and manage the health of
                AWS Lambda functions.
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
            PLANT-DADDY
            <div hidden={showProj2}>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
