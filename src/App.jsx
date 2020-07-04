import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.sass';

import Sidebar from './components/Sidebar/sidebar'
import Header from './components/Header/header'
import NotFound from './components/NotFound/notFound'
import Main from './containers/Main/main'

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
              <Switch>
                <Route path="/projects" render={
                  ()=><Main title="Проекты" />
                }/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;