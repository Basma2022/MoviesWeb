import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a href="/">
              <div className="d-inline-block">
                <div
                  className="d-inline-block fa-solid mx-2"
                  style={{ color: "#f5de50", fontSize: 40 }}
                >
                  Movies
                </div>
              </div>
              <span
                className="fa-solid fa-film fa-3x"
                style={{ color: "#00d8ff" }}
              ></span>
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x px-1" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x px-2" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
