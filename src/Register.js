import React, { Component } from 'react'

class Register extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      event.preventDefault();

      // const data = new FormData(event.target);
      let data = {
          email: event.target.email.value,
          password: event.target.password.value
      };
      fetch('https://me-api.antonscript.me/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    render() {
      return (
      <div className="form">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Enter email</label>
        <input id="email" name="email" type="text" />

        <label htmlFor="password">Enter your password</label>
        <input id="password" name="password" type="password" />


        <button>Send data!</button>
      </form>
        </div>
      );
    }
  }

export default Register