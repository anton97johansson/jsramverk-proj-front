import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      // const data = new FormData(event.target);
      let data = {
          email: event.target.email.value,
          password: event.target.password.value
      };
      console.log(data);
      fetch('https://proj-back.antonscript.me/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
          if (res){
              return res.json();
          }
        }).then(res => {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("user", res.data.user.email);
            // window.location.reload();
            this.props.forceRerender();
        })
        .catch(error => console.error('Error:', error));
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

export default Login