import React from 'react';

import './projectList.sass';

import ProjectItem from '../Project-item/projectItem';

const ProjectList = ({ title, projectList }) => (
  <div className="projects">
    <h1 className="projects__title" >{title}</h1>
    <div className="projects__wrap">
      {projectList.map(({ id, title, start, end, manager, admin }) => (
        <ProjectItem 
          key={id} 
          title={title} 
          start={start} 
          end={end} 
          manager={manager} 
          admin={admin}  />
      ))}
    </div>
  </div>
);

export default ProjectList;