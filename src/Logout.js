import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
       sessionStorage.removeItem("token");
       sessionStorage.removeItem("user");
      this.props.forceRerender();
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