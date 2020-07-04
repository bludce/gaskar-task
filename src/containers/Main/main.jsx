import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from "react-router-dom";

import './main.sass'

import ProjectList from '../../components/Project-list/projectList'
import Btn from '../../components/Btn/btn'
import Modal from '../../components/Modal/Modal'
import Form from '../../components/Form/Form'

import {addProject} from '../../actions/projectActions'

class Main extends Component {

  state = {
    show: false
  };

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render () {
    const path = location.pathname;
    const { projects, addProject } = this.props

    return (
      <div className="content">
        <div className="content__header">
          <h1 className="content__title" >{this.props.title}</h1>
          <Btn title="Добавить проект" onClick={() => this.showModal()}/>
        </div>
        
        <div className="tab-links">
          <NavLink to={`${path}`} exact className="tab-links__link" activeClassName="tab-links__link--active">Список проектов</NavLink>
          <NavLink to={`${path}/road`} className="tab-links__link" activeClassName="tab-links__link--active">Дорожные карты</NavLink>
        </div>
        <div className="tabs">
          <Switch>
            <Route exact path={`${path}`} render={
              ()=><ProjectList title="Список проектов" projectList={projects} />
            }/>
          </Switch>
        </div>
        <Modal onClose={this.showModal} show={this.state.show}>
          <Form addProject={addProject} onClose={this.showModal}/>
        </Modal>
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
    addProject: (id, title, start, end, manager, admin) => dispatch(addProject(id, title, start, end, manager, admin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
