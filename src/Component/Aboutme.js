import React from "react";
import myself from "../img/MYSELF.jpg";
import Cv from "./Cv";
import Education from "./Education";

const Aboutme = () => {
  return (
    <div className="ABOUT">
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col cont-about">
            <h2 className="who">
              WHO <b className="name">AM</b> I ?
            </h2>
            <hr />
            <p>
              I am <b className="name">Frosina</b> Front-End Developer focused
              on crafting clean and user-frendly experience, build beautiful web
              applications through carefully crafted code . I describe myself as
              a passionate developer who loves coding, open source, and the web
              platform.
              <i>
                {" "}
                “A designer knows he has achieved perfection not when there is
                nothing left to add, but when there is nothing left to take
                away. In order to be irreplaceable, one must always be
                different.Knowledge is power.Don’t forget: when you start a
                website, it’s not yet a trusted site. So you have to bring
                people from a trusted site to your site to build up the trust in
                your site.“
              </i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="aboutimg-cont">
              <img src={myself} height="330PX" alt="Frosina" className="aboutimg" />
            </div>
          </div>
          <div className="col">
            <div className="about-li">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {" "}
                  First Name: <span>Frosina</span>
                </li>
                <li className="list-group-item">
                  Last Name: <span>Gagovski</span>
                </li>
                <li className="list-group-item">
                  Birthdate: <span>09 December 1992</span>
                </li>
                <li className="list-group-item">
                  Nacionality: <span>Macedonian</span>
                </li>

                <li className="list-group-item">
                  Phone: <span>+38978253273</span>
                </li>
                <li className="list-group-item">
                  {" "}
                  Email: <span>frosina.gagovski@gmail.com</span>
                </li>
                <li className="list-group-item">
                  {" "}
                  Languages: <span>Macedonian, English</span>
                </li>
                <li className="list-group-item">
                  {" "}
                  Freelance :<span>Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Education />

      <Cv />
    </div>
  );
};

export default Aboutme;
