import React from "react";
import baker from "../Portfolio-img/css-baker.png";
import code from "../Portfolio-img/css-code.png";
import fit from "../Portfolio-img/css-fit.png";
import fylo from "../Portfolio-img/css-fylo.png";
import mcp from "../Portfolio-img/css-mcp.png";
import porto from "../Portfolio-img/css-porto.png";
import registration from "../Portfolio-img/css-registration-form.png";
import stars from "../Portfolio-img/css-stars.png";
import wash from "../Portfolio-img/css-wash.png";

function HtmlCss() {
  return (
    <div className="portfoilo-project">
      <div className="titile-portfolio">
        {" "}
        <h2>MY PORTFOLIO</h2>
        <hr />
        <h3>HTML & CSS</h3>
      </div>

      <div className=" portfolio-img-all">
        <div className="container-img">
          <a href="https://github.com/FrosinaG/project-bakery">
          <img src={baker} alt="project" className="all-portfolio" />
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          {" "}
          <a href="https://github.com/FrosinaG/project-code">
            {" "}
            <img src={code} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          <a href="https://github.com/FrosinaG/fit-project">
            {" "}
            <img src={fit} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          <a href="https://github.com/FrosinaG/project-fylo">
            <img src={fylo} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          {" "}
          <a href="https://github.com/FrosinaG/project-mcp">
            <img src={mcp}  alt="project"className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          <a href="https://github.com/FrosinaG/project-porto">
            <img src={porto} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          <a href="https://github.com/FrosinaG/project-registration">
            <img src={registration}  alt="project"className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          {" "}
          <a href="https://github.com/FrosinaG/project-social">
            <img src={stars}  alt="project"className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
        <div className="container-img">
          {" "}
          <a href="https://github.com/FrosinaG/project-washcar">
            {" "}
            <img src={wash}  alt="project"className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              view more
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HtmlCss;
