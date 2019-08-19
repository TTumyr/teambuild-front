import React from 'react';
import './ProjectTechStack.css';

const ProjectTechStack = ({ tech_stack }) => (
  <div className="inner-container">
    <h3>Tech Stack</h3>
    <div className='tech-stack'>
      {
        Object.entries(tech_stack)
          .map(entry => (
            <div key={entry[1][0].id} className="icon-container">
              <img src={`${entry[1][0].icon}`} alt={entry[1][0].picture} className='icon'/>
            </div>
          ))
      }
    </div>
  </div>
)

export default ProjectTechStack;