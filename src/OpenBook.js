import React, { useState } from "react";
import IMG_0395 from "./assets/IMG_0395.JPG";
import serene from "./assets/serene.png";
import all from "./assets/all.jpg";
import lavangphoto from "./assets/lavangphoto.jpeg";
import {
  FaHtml5,
  FaNode,
  FaReact,
  FaAws,
  FaCss3,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";

function OpenBook(props) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const {clicked, setClicked} = props;

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleBookClick = () => {
    setClicked(true);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/6e0fcada66a5269f8bd941bfe2f953d4",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: username,
            message: message,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="checkboxCover" />
      {/* <input type="checkbox" id="checkbox-cover" /> */}
      <input type="checkbox" id="checkbox-page1" />
      <input type="checkbox" id="checkbox-page2" />
      {/* <input type="checkbox" id="checkbox-page3" /> */}
      <div className="book" onClick={handleBookClick}>
        <div className="cover">
          <div className="coverFrontPage">
            <div className="coverHeader">
              <div className="volume">Volume 24</div>
              <div className="subtitle">
                {" "}
                INTERVIEW WITH ARIANNA NGUYEN
                <span>
                  - an enthusiastic software engineer experienced in full-stack
                  JavaScript development
                </span>
              </div>
            </div>
            <div className="coverMid"> THE SOFTWARE ENGINEER </div>
            <div className="coverBottom">
              an enthusiastic software engineer experienced in full-stack
              JavaScript development
            </div>
            <label className="coverNext" htmlFor="checkboxCover"></label>
          </div>
          <div className="coverBackPage">
            <label className="coverPrev" htmlFor="checkboxCover"></label>
          </div>
          <div className="cover-right"></div>
        </div>
        <div className="page" id="page1">
          <div className="frontPage">
            <span className="bookShadow"></span>
            <div className="pageHeader">
              <p>The Software Engineer</p>
              <p>Vol 24</p>
            </div>
            <div className="pageContent">
              <h1>TELL ME ABOUT YOURSELF</h1>
              <p>
                I’m Arianna, a full stack software engineer located in Houston,
                TX, specializing in React and Node. Before programming, I have
                always found my creative side in traditional arts such as
                painting and drawing, but little did I know that transitioning
                into coding would be an extension of that creativity. I realized
                that behind every line of code lies an opportunity for artistic
                expression — a chance to combine my creative thinking with
                logical problem-solving skills to create something not just
                visually appealing, but also practical and functional
              </p>
              <img src={IMG_0395} alt="painting" id="painting" />
            </div>
            <div className="pageFooter">
              <div></div>
              <p>page 1</p>
            </div>
            <label className="next" htmlFor="checkbox-page1"></label>
          </div>
          <div className="backPage">
            <span className="bookShadowBack"></span>
            <div className="pageHeader">
              <p>The Software Engineer</p>
              <p>Vol 24</p>
            </div>
            <div className="pageContent">
              <h1>WHAT ARE YOUR SKILLS?</h1>
              <h3>
                "I've gained practical experience with diverse technologies and
                frameworks, which I find easier to categorize into two groups."
              </h3>
              <div className="skillDiv">
                <div>
                  <h3>Advanced</h3>
                  <p>JavaScript</p>
                  <p>HTML/CSS</p>
                  <p>React</p>
                  <p>NodeJS</p>
                  <p>Express</p>
                  <p>MongoDB</p>
                  <p>PostgreSQL</p>
                </div>
                <div>
                  <h3>Experienced</h3>
                  <p>TypeScript</p>
                  <p>AWS</p>
                  <p>Git</p>
                  <p>GitHub</p>
                  <p>Tailwind CSS</p>
                  <p>Adobe</p>
                  <p>Wordpress</p>
                </div>
              </div>
              <div id="skillImgContainer">
                <RiJavascriptFill className="icon" />
                <TbBrandTypescript className="icon" />
                <FaAws className="icon" />
                <FaHtml5 className="icon" />
                <FaNode className="icon" />
                <FaReact className="icon" />
                <FaCss3 className="icon" />
                <FaGithub className="icon" />
                <BiLogoMongodb className="icon" />
                <BiLogoPostgresql className="icon" />
              </div>
            </div>
            <div className="pageFooter">
              <div></div>
              <p>page 2</p>
            </div>
            <label className="prev" htmlFor="checkbox-page1"></label>
          </div>
        </div>
        <div className="page" id="page2">
          <div className="frontPage">
            <span className="bookShadow"></span>
            <div className="pageHeader">
              <p>The Software Engineer</p>
              <p>Vol 24</p>
            </div>
            <div className="pageContent">
              <h1>YOUR EXPERIENCE?</h1>
            </div>
            <div className="pageContentSub">
              <div className="topExperience" id="bari">
                <img src={all} alt="bari" />
                <p>
                  <span className="boldText">Founder at Bari</span>Hands-on with
                  the development and maintenance of our e-commerce website,
                  ensuring its functionality and performance.
                </p>
              </div>
              <div className="bottomExperience">
                <p>
                  <span className="boldText">Software Engineer at Serene</span>
                  Responsible for developing Serene, an open-source application
                  designed for visualizing metrics and preventing Lambda cold
                  starts.
                </p>
                <img src={serene} alt="serene" />
              </div>
              <div className="topExperience" id="lavang">
                <img src={lavangphoto} alt="lavang" />
                <p>
                  <span className="boldText">UI Developer at Lavang</span>Design
                  and enhance the UI, resulting in a website with an average of
                  10,000 monthly visitors.
                </p>
              </div>
            </div>

            <div className="pageFooter">
              <div></div>
              <p>page 3</p>
            </div>
            <label className="next" htmlFor="checkbox-page2"></label>
          </div>
          <div className="backPage">
            <span className="bookShadowBack"></span>
            <div className="pageHeader">
              <p>The Software Engineer</p>
              <p>Vol 24</p>
            </div>
            <div className="pageContent">
              <h1>WHAT ABOUT PROJECTS?</h1>
              <div className="projectSection">
                <div>
                  <p className="boldText">CNTCN</p>
                  <p>
                    Social media platform to connect and share contents with
                    friends
                  </p>
                  <p>
                    <span>Tech used:</span> JavaScript, Typescript, React, NodeJS, Express,
                  PostgreSQL, Socket.io, AWS(SDK, S3), Bootstrap, HTML, CSS
                  </p>
                </div>
                <div>
                  <p className="boldText">BUDDY-STEPS</p>
                  <p>Individual and team task tracker</p>
                  <p>
                    <span>Tech used:</span> JavaScript, React, NodeJS, Express, PostgreSQL,
                  HTML, SCSS, CSS
                  </p>
                </div>
                <div>
                  <p className="boldText">PLANTDADDY</p>
                  <p>Dashboard for plant care with SMS reminders</p>
                  <p>
                    <span>Tech used:</span> JavaScript, React, NodeJS, Express, MongoDB,
                  Twilio, HTML, SCSS, CSS
                  </p>
                </div>
              </div>
            </div>
            <div className="pageFooter">
              <div></div>
              <p>page 4</p>
            </div>
            <label className="prev" htmlFor="checkbox-page2"></label>
          </div>
        </div>
        <div className="page" id="page3">
          <div className="frontPage">
            <span className="bookShadow"></span>
            <div className="pageHeader">
              <p>The Software Engineer</p>
              <p>Vol 24</p>
            </div>
            <div className="pageContent">
              <h1>WHERE TO CONTACT YOU?</h1>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/ariannanguyen/"
                  target="blank"
                >
                  LINKEDIN
                </a>
                <a href="https://github.com/dahliarianna" target="blank">
                  GITHUB
                </a>
              </div>
              {!sent ? (
                <div className="formContainer">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      value={username}
                      name="username"
                      onChange={handleUsername}
                      required
                    />
                    <p id="inputLabel">your email</p>
                    <textarea
                      type="text"
                      value={message}
                      name="message"
                      onChange={handleMessage}
                      required
                    />
                    <p id="messageLabel">your message</p>
                    <button type="submit">Send</button>
                  </form>
                </div>
              ) : (
                <div className="thankyou">THANK YOU FOR YOUR INTEREST!</div>
              )}
            </div>
            <div className="pageFooter">
              <div></div>
              <p>page 5</p>
            </div>
            {/* <label className="next" htmlFor="checkbox-page3"></label> */}
          </div>
          <div className="backPage">
            <span className="bookShadowBack"></span>
            <div className="pageHeader">
              <p>The Software Engineer</p>
              <p>Vol 24</p>
            </div>
            <div className="pageContent">
              <h1>WHERE TO CONTACT YOU?</h1>
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
            <div className="pageFooter">
              <div></div>
              <p>page 6</p>
            </div>
            <label className="prev" htmlFor="checkbox-page3"></label>
          </div>
        </div>
        <div className="backCover"></div>
      </div>
    </div>
  );
}

export default OpenBook;
