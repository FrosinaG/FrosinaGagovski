import React from "react";
import api from "../Portfolio-img/js-api.png";
import card from "../Portfolio-img/js-card.png";
import products from "../Portfolio-img/js-products.png";
import quotes from "../Portfolio-img/js-quotes.png";
import search from "../Portfolio-img/js-search.png";
import user from "../Portfolio-img/js-user.png";

function JavaScript() {
  return (
    <div className="portfoilo-project">
      <div className="titile-portfolio">
        {" "}
        <h2>MY PORTFOLIO</h2>
        <hr />
        <h3>JAVA SCRIPT</h3>
      </div>

      <div className="portfolio-img-all">
        <div className="container-img">
          <a href="https://github.com/FrosinaG/project-onclick">
            <img src={api} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
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
          <a href="https://github.com/FrosinaG/exercise-app">
            {" "}
            <img src={card} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
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
          <a href="https://github.com/FrosinaG/project-products">
            <img src={products} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
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
          <a href="https://github.com/FrosinaG/project-quotes">
            <img src={quotes} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
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
          <a href="https://github.com/FrosinaG/project-search">
            <img src={search} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
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
          <a href="https://github.com/FrosinaG/project-userOnclick">
            <img src={user} alt="project" className="all-portfolio" />{" "}
            <p className="view">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
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

export default JavaScript;
