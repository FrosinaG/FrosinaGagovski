import React from "react";
import { Link } from "react-router-dom";
const frgjugtk = () => {
  return (
    <>
      <div className="home-con">
        <div className="home-cont">
          <h2 className="home-title mob1">
            “Simplicity is the soul of efficiency.-Make it work, make it right,
            make it fast.”
          </h2>
          <button className="aboutebutton mob1">
            {" "}
            <Link to="aboutme" className="aboutebutton">
              <p className="more-about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill pro"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                Hello, I am Frosina !
              </p>{" "}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default frgjugtk;
