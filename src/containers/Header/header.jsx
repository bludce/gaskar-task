import React from 'react';
import { connect } from 'react-redux';

import {setLogout} from '../../actions/userAction'

import './header.sass';

const Header = ({setLogout}) => (
  <header className="header">
    <div className="logout" onClick={()=>setLogout(false)}></div>
  </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
    setLogout: (auth) => dispatch(setLogout(auth))
  };
};

export default connect('', mapDispatchToProps)(Header);