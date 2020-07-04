

import React, { Component } from 'react';

import './Form.sass';

import Btn from '../../components/Btn/btn'

class Form extends Component {
  
  state = {
    title: '',
    start: '',
    end: '',
    manager: '',
    admin: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const {title, start, end, manager, admin} = this.state
    e.preventDefault()
    this.props.addProject((new Date()).getTime(), title, start, end, manager, admin)
    this.props.onClose()
  }

  render() {
    return (
      <form action="" className="form">
        <div className="form__field">
          Название
          <input 
            name="title" 
            className="form__input" 
            value={this.state.title} 
            onChange={this.handleInputChange} 
            type="text"
          />
        </div>
        <div className="form__field">
          Продолжительность проекта
          <input 
            name="start" 
            className="form__input" 
            value={this.state.start} 
            onChange={this.handleInputChange} 
            type="date"
          />
          <input 
            name="end" 
            className="form__input" 
            value={this.state.end} 
            onChange={this.handleInputChange} 
            type="date"
          />
        </div>
        <div className="form__field">
          Руководитель проекта
          <input 
            name="manager" 
            className="form__input" 
            value={this.state.manager}
            onChange={this.handleInputChange} 
            type="text"
          />
        </div>
        <div className="form__field">
          Администратор проекта
          <input 
            name="admin" 
            className="form__input" 
            value={this.state.admin} 
            onChange={this.handleInputChange} 
            type="text"
          />
        </div>
        <div className="btn" onClick={this.handleSubmit} >Добавить проект</div>
      </form>
    )
  }
} 

export default Form;