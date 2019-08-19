import React from "react"
import "../../../../main.css"
import "./ProjectNavbar.css"
import logo_text from "../../../../static/logo_text.png"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [hidden, setHidden] = useState(true)

  const handleClick = () => {
      hidden ? setHidden(false) : setHidden(true)
  }

  return (
      <div className="navbar">
          <div className="container">
              <div className="navbar__logo">
                  <Link to="/">
                      <img
                          alt="TeamBuild logo"
                          className="logo"
                          src={logo_text}
                      />
                  </Link>
              </div>
              <div
                  className={
                      hidden
                          ? "navbar__m-dropdown"
                          : "navbar__m-dropdown open"
                  }
              >
                  <button
                      type="button"
                      className="navbar__m-icon"
                      onClick={handleClick}
                  >
                      <div className="navbar__m-icon-bar"></div>
                      <div className="navbar__m-icon-bar"></div>
                      <div className="navbar__m-icon-bar"></div>
                  </button>
                  <div className="navbar__links">
                      <Link
                          className="navbar__links__link link black"
                          to="/projects"
                      >
                          All Projects
                      </Link>
                      <Link className="link" to="/projects/new">
                          <a
                              className="navbar__links__link link blue"
                              href="#"
                          >
                              New Project
                          </a>
                      </Link>
                      <Link className="link" to="/signin">
                          <a className="login-button" href="#">
                              Log in
                          </a>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar

