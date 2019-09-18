import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../../Logo/Logo"
import ProfilePicture from "../../../Pages/Dashboard/DashboardNavbar/DashboardPicture/DashboardPicture"
import "../../../../main.css"
import "./ProjectNavbar.css"

const Navbar = ({ user }) => {
    console.log(user)
  return (
    <div className="navbar">
        <div className="container">
            <div className="navbar__logo">
                <Logo />
            </div>
            <div className="navbar__links">
                <Link className="navbar__links link black" to="#">
                    All Projects
                </Link>
                <Link className="navbar__links link blue" to="#">
                    New Project
                </Link>
            </div>
            { user === null || user.success === false ? 
                <div className="navbar__user">
                    <Link className="link" to="/signin">
                        <a className="login-button" href="#">
                            Log in
                        </a>
                    </Link> 
                </div>
                :
                <div className="navbar__user">
                    <ProfilePicture />
                    <div className="username-tag">
                        <p>
                            {user.first_name} {user.last_name}
                        </p>
                    </div>
                </div>
            }
        </div>
    </div>
)
}

export default Navbar;

