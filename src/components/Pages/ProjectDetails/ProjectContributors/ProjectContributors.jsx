import React from 'react';
import './ProjectContributors.css';

const ProjectContributors = ({ contributors }) => (
  <div className="members-container">
    <h3>Members</h3>
    <div className='members'>
      {
        contributors.map((contributor, i) => (
          <div key={i} className="member-container">
            <img src={`/static/media/react-logo.af408a49.svg`} alt='contributor' className='member'/>
            <p>{contributor[0].first_name + " " + contributor[0].last_name}</p>
          </div>
        ))
      }
    </div>
  </div>
)

export default ProjectContributors;