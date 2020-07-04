import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.sass';

import Sidebar from './components/Sidebar/sidebar'
import Header from './components/Header/header'

class App extends PureComponent {

  state = {

  }

  componentDidMount = () => {
    
  }

  render() {

    return (
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <div className="main">
            <Header />
            <div className="main-wrapper">
              <Route path="/projects" render={
                ()=><Main title="Проекты" />
              }/>
              {/* <Route component={NotFound} /> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;