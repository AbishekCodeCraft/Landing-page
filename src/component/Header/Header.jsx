import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="her0-section">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" id="">
            <a className="navbar-brand" href="#">
              Abiding Technology, Inc
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#terms">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row hero-row">
            <div className="col-12">
              <div className="hero-bg">
                <div className="motto">
                  <div className="motto-1">
                    <p>Timeless</p>
                  </div>
                  <div className="motto-2">
                    <p>Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
