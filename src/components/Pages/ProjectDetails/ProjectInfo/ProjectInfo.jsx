import React from 'react';
import GitIcon from '../../../../static/github_icon.png';
import './ProjectInfo.css';

const ProjectInfo = ({ project }) => (
  <div className='content'>
    <div className="project-info">
      <div className="name-and-link">
        <h2 className="project-name">{project.name}</h2>
        <a href={project.github}><img src={GitIcon} alt="github" className='git-link'/></a>
      </div>
      <div className="info">
        <p>{project.description}</p>
      </div>
    </div>
    <div className="project-thumbnail">
      <img src={project.thumbnail} alt="project"/>
    </div>
  </div>
)

export default ProjectInfo;