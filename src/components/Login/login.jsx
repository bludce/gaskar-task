import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './login.sass';

class Login extends Component {

  state = {
    login: '',
    password: '',
    remember: false
  }

  componentDidMount() {
    const login = localStorage.getItem('login') ? localStorage.getItem('login') : ''
    const password = localStorage.getItem('password') ? localStorage.getItem('password') : ''

    this.setState({
      login,
      password
    })
  }

  handleInputChange = (e) => {
    const value = e.target.name === 'remember' ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
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
    const {login, password, remember} = this.state
    const {setAuth} = this.props
    if (remember) {
      localStorage.setItem('login', login)
      localStorage.setItem('password', password)
    }
    if (this.validate(login, password)) {
      setTimeout(() => {
        this.props.history.push("/projects")
        setAuth(true)
      }, 1000);
    } else {
      alert('Проверьте введенные данные')
    }
  }
  
  render () {

    return (
      <div className="login">
        <form className="form">
          <div className="form__field">
            Логин 
            <input 
              className="form__input" 
              name="login" 
              type="email" 
              placeholder="Логин" 
              onChange={this.handleInputChange} 
              value={this.state.login} 
              required 
            />
          </div>
          <div className="form__field">
            Пароль
            <input 
              className="form__input"
              name="password" 
              type="password"  
              placeholder="Пароль" 
              onChange={this.handleInputChange}
              value={this.state.password}  
              required 
            />
          </div>
          <input 
            type="checkbox" 
            className="form__checkbox" 
            id="remember" 
            onChange={this.handleInputChange} 
            checked={this.state.remember} 
            name="remember"  
          />
          <label htmlFor="remember">Запомнить пароль</label>
          <div className="btn" onClick={this.authWithEmailPassword} >Войти</div>
          <p>Забыли пароль?</p>
        </form>          
      </div>
    );
  }
}

export default withRouter(Login);