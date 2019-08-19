import React, { useState, useEffect } from "react"
import "./ProjectDetails.css"
import { ReactComponent as Loader } from '../../../static/loader.svg';
import ProjectNavbar from "./ProjectNavbar/ProjectNavbar"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectTechStack from "./ProjectTechStack/ProjectTechStack"
import ProjectContributors from "./ProjectContributors/ProjectContributors"
import ProjectApplication from "./ProjectApplication/ProjectApplication"
import ProjectFooter from "./ProjectFooter/ProjectFooter"


const ProjectDetails = ({id = 16}) => {
  const [ currentProject, setCurrentProject ] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/project/${id}`)
    .then(res => res.json())
    .then(project => {
      setCurrentProject(project[0])
    })
  }, []);

  if (currentProject) {
    const tech_stack = JSON.parse(currentProject.tech_stack)
    return (
      <div>
        <ProjectNavbar />
        <div className="inner-container">
          <ProjectInfo project={currentProject} />
          <ProjectTechStack tech_stack={tech_stack} />
          <ProjectContributors />
          <ProjectApplication />
          <ProjectFooter />
        </div>
      </div>
    )
  } else {
    return <div className='content'><Loader /></div>
  }
}

export default ProjectDetails