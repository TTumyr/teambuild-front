import React, { useState, useEffect } from "react"
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar"
import DashboardFooter from "./DashboardFooter/DashboardFooter"
import DashboardContent from "./DashboardContent/DashboardContent"
import NewProject from "../NewProject/NewProject"
import Projects from "../Projects/Projects"
import UserPicture from "./UserPicture/UserPicture"
import UserInfo from "./UserInfo/UserInfo"
import auth from "../../../utils/Auth"
import "./Dashboard.css"
import "../../../main.css"
import FriendsAndProjects from "./FriendsAndProjects/FriendsAndProjects"

import Uploader from "./_Uploader/Uploader"


const Dashboard = () => {
    const [user, setUser] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [sideNavStyle, setSideNavStyle] = useState({
        flexBasis: "65px",
    })
    const [sideNavTextStyle, setSideNavTextStyle] = useState({
        display: "none",
    })

    useEffect(() => {
        fetch("/user")
            .then(res => res.json())
            .then(user => {
                auth.isAdmin(user)
                setUser(user)
                setLoading(false)
            })
    }, [])

    const openSideNav = () => {
        if (sideNavStyle["flexBasis"] === "250px") {
            setSideNavStyle({
                flexBasis: "65px",
            })
            setSideNavTextStyle({
                display: "none",
                width: "0px",
                transition: "width 0.5s linear",
            })
            return
        }
        setSideNavStyle({
            flexBasis: "250px",
            transition: "flex-basis 0.5s linear",
        })
        setSideNavTextStyle({
            display: "inline",
            position: "relative",
            width: "180px",
        })
    }

    if (loading) {
        return null
    } else {
        return (
            // All components for the dashboard should be rendered in the DashboardContent Component.
            <div>
                <DashboardNavbar openSideNav={openSideNav} user={user} />
                <DashboardContent
                    sideNavStyle={sideNavStyle}
                    sideNavTextStyle={sideNavTextStyle}
                >
                    {/*<NewProject user={user} />*/}



                    <div id="profile-container">
                        <UserPicture user={user}/>
                        <UserInfo user={user} />

                    </div>

                    <Uploader user={user} />

                    <FriendsAndProjects />

                </DashboardContent>
                <DashboardFooter />
            </div>
        )
    }
}

export default Dashboard
