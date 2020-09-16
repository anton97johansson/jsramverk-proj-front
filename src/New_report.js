import React, { Component } from 'react'

class NewReport extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      // const data = new FormData(event.target);
      let data = {
          week: event.target.week.value,
          data: event.target.data.value
      };
      console.log(data);
      fetch('http://localhost:1337/reports', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': sessionStorage.getItem("token")
        }
      });
    }

    render() {
      return (
      <div className="form">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="week">Enter week</label>
        <input id="week" name="week" type="text" />

        <label htmlFor="data">Enter your data</label>
        <textarea id="data" name="data" type="data" />


        <button>Send data!</button>
      </form>
        </div>
      );
    }
  }

export default NewReport