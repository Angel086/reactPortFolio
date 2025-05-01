import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            AGGM
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  href="/"
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
                      src="./assets/mail.svg"
                      style={{ width: "1.2rem", height: "1.2rem" }}
                      alt="mail"
                    />
                    send me a post
                  </span>
                </a>
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
                      src="./assets/linkedin.svg"
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
                      src="./assets/github.svg"
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