import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from "react-router-dom";

import './main.sass'

import ProjectList from '../../components/Project-list/projectList'

class Main extends Component {

  componentDidMount() {

  }

  render () {
    const path = location.pathname;
    const { projects } = this.props
    console.log(projects)
    return (
      <div className="content">
        <h1 className="content__title" >{this.props.title}</h1>
        <div className="tab-links">
          <NavLink to={`${path}`} exact className="tab-links__link" activeClassName="tab-links__link--active">Список проектов</NavLink>
          <NavLink to={`${path}/road`} className="tab-links__link" activeClassName="tab-links__link--active">Дорожные карты</NavLink>
        </div>
        <div className="tabs">
          <Switch>
            <Route exact path={`${path}`} render={
              ()=><ProjectList title="Список проектов" projectList={projects} />
            }/>
            <Route path={`${path}?road`} exact />

          </Switch>
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: () => dispatch(addProject())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
