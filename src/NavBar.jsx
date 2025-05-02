import React from "react";
import mail from "./assets/mail.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AGGM
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">


                {/**<Link className="nav-link active" to="/contact" style={{ color: "black" }}>
  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "black" }}>
    <img src={mail} style={{ width: "1.2rem", height: "1.2rem" }} alt="mail" />
    send me a post
  </span>
</Link> */}
                <Link
                  className="nav-link active"
                  style={{ color: "black" }}
                  to="/contact"
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "black"
                    }}
                  >
                    <img
                    src={mail}
                      style={{ width: "1.2rem", height: "1.2rem" }}
                      alt="mail"
                    />
                    send me a post
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black" }}
                  href="https://www.linkedin.com/in/angel-guerra-marquez-a593a615b/"
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "black"
                    }}
                  >
                    <img
                      src={linkedin}
                      style={{ width: "1.2rem", height: "1.2rem" }}
                      alt="linkedin"
                    />
                    let's Connect
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/Angel086"
                  style={{ color: "black" }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "black"
                    }}
                  >
                    <img
                      src={github}
                      style={{ width: "1.2rem", height: "1.2rem" }}
                      alt="github"
                    />
                    checkout git
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}