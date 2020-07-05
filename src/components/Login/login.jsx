import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './login.sass';

class Login extends Component {

  state = {
    login: '',
    password: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate = (login, password) => {
    if (login === 'admin' && password == 'admin') {
      return true
    } 

    return false
  }

  authWithEmailPassword = (e) => {
    e.preventDefault()
    const {login, password} = this.state
    const {setAuth} = this.props

    if (this.validate(login, password)) {
      setTimeout(() => setAuth(true), 1000);
    } else {
      alert('Проверьте введенные данные')
    }
  }
  
  render () {

   const { isAuth } = this.props

    if (isAuth) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="login">
        <form className="form">
          <div className="form__field">
            Логин
            <input className="form__input" name="login" type="text" placeholder="Логин" onChange={this.handleInputChange} required></input>
          </div>
          <div className="form__field">
            Пароль
            <input className="form__input" name="password" type="password"  placeholder="Пароль" onChange={this.handleInputChange} required></input>
          </div>
            <div className="btn" onClick={this.authWithEmailPassword} >Войти</div>
        </form>          
      </div>
    );
  }
}

export default Login;