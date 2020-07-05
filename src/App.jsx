import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {setAuth} from './actions/userAction'

import './index.sass';

import Sidebar from './components/Sidebar/sidebar'
import Header from './components/Header/header'
import NotFound from './components/NotFound/notFound'
import Main from './containers/Main/main'
import Login from './components/Login/login'

class App extends PureComponent {

  state = {

  }

  componentDidMount = () => {
    
  }

  render() {
    const { isAuth, setAuth } = this.props

    return (
      
      <BrowserRouter>
        {!isAuth ? 
          <Login setAuth={setAuth} isAuth={isAuth}/> 
        :
        <div className="app">
          <Sidebar />
          <div className="main">
            <Header />
            <div className="main-wrapper">
              <Switch>
                <Route path="/projects" render={
                  ()=><Main title="Проекты" />
                }/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
        }
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (auth) => dispatch(setAuth(auth))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);