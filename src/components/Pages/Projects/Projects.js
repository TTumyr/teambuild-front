import React from "react"
import { Link } from "react-router-dom"
import { dummyData } from "./dummyData"
import "../../../main.css"
import "./Projects.css"

const Projects = () => {
    return (
        <div className="inner-container">
            <div>
                <h2 className="page__header">Projects</h2>
            </div>
            <div className="page__search">
                <input
                    className="page__searchbar"
                    type="text"
                    placeholder="Search for projects"
                ></input>
                <button className="page__searchbutton">see all</button>
            </div>
            <div className="page__filters">
                <select className="page__filter">
                    <option>Most Recent</option>
                </select>
                <select className="page__filter">
                    <option>Category</option>
                </select>
                <select className="page__filter">
                    <option>Project Status</option>
                </select>
            </div>
            <div className="page__projects">
                {dummyData.map(project => {
                    return (
                        <div className="page__project">
                            <Link to="/projects/project">
                                <div className="page__project--content"></div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
