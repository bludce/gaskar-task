import React, { Component } from 'react';
import { connect } from 'react-redux';

import './main.sass'

class Main extends Component {

  componentDidMount() {

  }

  render () {

    return (
      <div className="content">
        <h1 className="content__title" >{this.props.title}</h1>
                
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
