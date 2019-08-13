import React from 'react';

import { ReactComponent as ReactLogo } from '../../../../static/react-logo.svg';
import { ReactComponent as PythonLogo } from '../../../../static/python-logo.svg';
import { ReactComponent as AngularLogo } from '../../../../static/angular-logo.svg';
import { ReactComponent as VueLogo } from '../../../../static/vue-logo.svg';
import { ReactComponent as NodeLogo } from '../../../../static/node-logo.svg';

import './ProjectTechStack.css';

const ProjectTechStack = ({ project }) => (
  <div className="inner-container">
    <h3>Tech Stack</h3>
    <div className='tech-stack'>
      {
        project.tech_stack.map(tech => (
          <div className="icon-container">
            <img key={tech} src={tech} alt={tech} className='icon'/>
          </div>
        ))
      }
    </div>
  </div>
  
)

export default ProjectTechStack;