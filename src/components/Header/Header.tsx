// import React from 'react'
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white p-3">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Tranquil<span>codes</span>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <FontAwesomeIcon className="text-white fs-2" icon={faBars} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>
            <span className="navbar-text text-white">
              <a href="#">
                <button type="button">Contact</button>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
