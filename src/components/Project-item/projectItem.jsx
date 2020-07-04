import React from 'react';

import building from '../../assets/img/building.jpeg'
import './projectItem.sass'

const ProjectItem = ({ title, start, end, manager, admin }) => (
  <div className="project">
    <div className="project__image">
      <img src={building} alt=""/>
      <span className="project__category">Медицина</span>
      <span className="project__stage">Строится</span>
    </div>
    <div className="project-content">
      {title && <div className="project-content__title">{title}</div>}
      <div className="project-content__date"><i className="fa fa-calendar" aria-hidden="true"></i>{start && start} {end && '-'} {end && end } гг.</div>
      {manager &&<div className="project-content__manager"><i className="fa fa-male" aria-hidden="true"></i>{manager}</div>}
      {admin &&<div className="project-content__admin"><i className="fa fa-rub" aria-hidden="true"></i>{admin}</div>}
    </div>
  </div>
);

export default ProjectItem;