import React from 'react';
import './ProjectRecruitment.css';

const ProjectRecruitment = ({ recruits: { developer, designer, operator }}) => (
  <div className='project-recruitment'>
    <h3>This project is recruiting!</h3>
    <div className="recruitment-roles">
      <div className="developer-role">
        Developer x {developer}
      </div>
      <div className="designer-role">
        Designer x {designer}
      </div>
      <div className="devops-role">
        DevOps x {operator}
      </div>
    </div>
    <button className="apply-button">Apply Now!</button>
  </div>
)

export default ProjectRecruitment;