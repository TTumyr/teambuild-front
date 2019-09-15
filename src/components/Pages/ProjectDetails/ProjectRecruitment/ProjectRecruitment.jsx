import React from 'react';
import './ProjectRecruitment.css';

const ProjectRecruitment = ({ developers = 2, designers = 1, devops = 1 }) => (
  <div className='project-recruitment'>
    <h3>This project is recruiting!</h3>
    <div className="recruitment-roles">
      <div className="developer-role">
        Developer x {developers}
      </div>
      <div className="designer-role">
        Designer x {designers}
      </div>
      <div className="devops-role">
        DevOps x {devops}
      </div>
    </div>
    <button className="apply-button">Apply Now!</button>
  </div>
)

export default ProjectRecruitment;