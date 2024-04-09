import React from "react";
import websiteQR from "./assets/websiteQR.png"

function ClosedBook() {
  return (
    <div className="stage">
      <div className="coverCover">
        <figure className="back">
          <img src={websiteQR} alt='websiteQR'/>
          <p> www.ariannanguyen.com </p>
        </figure>
        <figure className="top"></figure>
        <figure className="bottom"></figure>
        <figure className="left"></figure>
        <figure className="right">
          <div className="paperLine"></div>
          <div className="paperLine1"></div>
          <div className="paperLine2"></div>
          <div className="paperLine3"></div>
          <div className="paperLine4"></div>
          <div className="paperLine5"></div>
        </figure>
        <figure className="front">
          <div className="frontVolume">Volume 24</div>
          <div className="coverHeader">
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
        </figure>
      </div>
    </div>
  );
}

export default ClosedBook;
