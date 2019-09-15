import React, { useState, useEffect } from "react"
import "./ProjectDetails.css"
import { ReactComponent as Loader } from '../../../static/loader.svg';
import ProjectNavbar from "./ProjectNavbar/ProjectNavbar"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectTechStack from "./ProjectTechStack/ProjectTechStack"
import ProjectContributors from "./ProjectContributors/ProjectContributors"
import ProjectRecruitment from "./ProjectRecruitment/ProjectRecruitment"
import ProjectFooter from "./ProjectFooter/ProjectFooter"


const ProjectDetails = ({id = 16}) => {
  const [ currentProject, setCurrentProject ] = useState(null);
  const [ contributors, setContributors ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/project/${id}`)
    .then(res => res.json())
    .then(project => {
      setCurrentProject(project[0])
    })
    .then(res => {
      fetch(`http://localhost:5000/project/${id}/contributors`)
      .then(res => res.json())
      .then(contributors => {
        setContributors(contributors)
      })
    })
  }, []);

  if (currentProject) {
    const tech_stack = JSON.parse(currentProject.tech_stack)
    console.log(currentProject)
    return (
      <div className='project-details'>
        <ProjectNavbar />
        <div className="project-container">
          <ProjectInfo project={currentProject} />
          <ProjectTechStack tech_stack={tech_stack} />
          <ProjectContributors contributors={contributors}/>
          <ProjectRecruitment />
        </div>
        <ProjectFooter />
      </div>
    )
  } else {
    return <div className='loader'><Loader /></div>
  }
}

export default ProjectDetails