import React, { Component } from 'react';

class Logout extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
       sessionStorage.removeItem("token");
      window.location.reload();
    }

    render() {
      return (
      <div className="form">
      <form onSubmit={this.handleSubmit}>
        <button>Logout!</button>
      </form>
        </div>
      );
    }
  }

export default Logout