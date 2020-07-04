import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar.sass'

const Sidebar = () => (
  <div className="sidebar">
    <img src="" alt="" className="logo"/>
    <ul className="sidebar-menu">
      <li className="sidebar-menu__item">
        <NavLink exact={true} to="/tasks" activeClassName="is-active">
          Задачи и работы
        </NavLink>
      </li>
      <li className="sidebar-menu__item">
        <NavLink exact={true} to="/projects" activeClassName="is-active">
          Проекты
        </NavLink>
      </li>
      <li className="sidebar-menu__item">
        <NavLink exact={true} to="/calenadar" activeClassName="is-active">
          Календарь
        </NavLink>
      </li>
      <li className="sidebar-menu__item">
        <NavLink exact={true} to="/opportunities" activeClassName="is-active">
          Возможности
        </NavLink>
      </li>
    </ul>

  </div>
);


export default Sidebar;