import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.sass';

class App extends PureComponent {

  state = {

  }

  componentDidMount = () => {
    
  }

  render() {

    return (

      <BrowserRouter>
        <h1>Hello world</h1>
      </BrowserRouter>
    );
  }
}

export default App;