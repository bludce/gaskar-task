import React from 'react';

import building from '../../assets/img/building.jpeg'
import './projectItem.sass'

const ProjectItem = ({ title, start, end, manager, admin, stage, category }) => (
  <div className="project">
    <div className="project__image">
      <img src={building} alt=""/>
      <span className="project__category">{category}</span>
      <span className="project__stage">{stage}</span>
    </div>
    <div className="project-content">
      <div className="project-content__title">{title}</div>
      <div className="project-content__date"><i className="fa fa-calendar" aria-hidden="true"></i>{start} - {end} гг.</div>
      <div className="project-content__manager"><i className="fa fa-male" aria-hidden="true"></i>{manager}</div>
      <div className="project-content__admin"><i className="fa fa-rub" aria-hidden="true"></i>{admin}</div>
    </div>
  </div>
);

export default ProjectItem;