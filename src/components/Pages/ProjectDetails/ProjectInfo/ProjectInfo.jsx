import React from 'react';
import GitIcon from '../../../../static/github_icon.png';
import './ProjectInfo.css';

const ProjectInfo = () => {
  const project = {
    name: "Project Name",
    github: '#',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repellendus eligendi veritatis repellat. Commodi magni voluptates neque ab saepe, quos sequi, sed corporis quisquam a cumque iste veniam quae fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis id cum exercitationem, iusto mollitia repudiandae incidunt commodi eum reiciendis? Blanditiis, consequuntur explicabo dolor hic est animi dolore facilis ipsum quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, maxime amet! Modi architecto nisi unde molestias, explicabo temporibus consequatur similique, non sed in ullam debitis ut incidunt nemo, nesciunt quisquam?',
    thumbnail: '#'
  }

  return (
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
}

export default ProjectInfo;