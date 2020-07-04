import React from 'react';

import './projectList.sass';

import ProjectItem from '../Project-item/projectItem';

const ProjectList = ({ projectList }) => (
  <div className="project-list">
    {projectList.map(({ id }) => (
      <ProjectItem key={id} id={id}/>
    ))}
  </div>
);

export default ProjectList;