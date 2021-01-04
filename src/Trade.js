import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import io from 'socket.io-client';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 400, pv: 2400, amt: 2400},{name: 'Page C', uv: 400, pv: 2400, amt: 2400}];
// import ChatInput from './ChatInput';

// const socket = io.connect("https://socket-server.antonscript.me");
const socket = io.connect("https://proj-back.antonscript.me");
// const wholeSocket = io("http://localhost:3001");

class Chat extends Component {
    constructor() {
      super();
      this.state = { user: "", graph: [], price: 0};
      this.submitBalence = this.submitBalence.bind(this);
      this.submitPurchase = this.submitPurchase.bind(this);
      this.submitSell = this.submitSell.bind(this);
    }
    componentDidMount() {
        let data = {
            email: sessionStorage.getItem("user")
        };
        fetch('https://proj-back.antonscript.me/user', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': sessionStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(data => this.setState({ user: data }));
        console.log(this.state.user);
        socket.on("new price", (message) => {
            this.setState({
                graph: [...this.state.graph, message],
                price: message.uv

            });
        });
  }

  submitBalence(event) {
    event.preventDefault();

    // const data = new FormData(event.target);
    let newBalence = parseFloat(this.state.user.money) + parseFloat(event.target.balence.value);
    let data = {
        user: this.state.user.user,
        change: {
            money: newBalence
        }
    };
    event.target.balence.value = null;
    fetch('https://proj-back.antonscript.me/user', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem("token")
      }
    }).then(response => response.json())
    .then(data => this.setState({ user: data }));;
  }
  submitPurchase(event) {
    event.preventDefault();

    // const data = new FormData(event.target);
    let totalCost = parseFloat(this.state.price) * parseFloat(event.target.purchaseAmount.value);
    let totalShares = parseInt(this.state.user.amount) + parseInt(event.target.purchaseAmount.value);
    let newBalence = parseFloat(this.state.user.money) - totalCost;
    let data = {
        user: this.state.user.user,
        change: {
            money: newBalence,
            amount: totalShares
        }
    };
    event.target.purchaseAmount.value = null;
    fetch('https://proj-back.antonscript.me/user', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem("token")
      }
    }).then(response => response.json())
    .then(data => this.setState({ user: data }));;
  }
  submitSell(event) {
    event.preventDefault();

    let totalValue = parseFloat(this.state.price) * event.target.sellAmount.value;
    let totalShares = parseInt(this.state.user.amount) - parseInt(event.target.sellAmount.value);
    let newBalence = parseFloat(this.state.user.money) + totalValue;
    let data = {
        user: this.state.user.user,
        change: {
            money: newBalence,
            amount: totalShares
        }
    };
    event.target.sellAmount.value = null;
    fetch('https://proj-back.antonscript.me/user', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem("token")
      }
    }).then(response => response.json())
    .then(data => this.setState({ user: data }));;
  }


  // width={this.props.width} height={this.props.height}
    render() {
      return (
      <div>
      <h2>Trading</h2>
      <div className="userInfo">
      <p>Balence: {this.state.user.money}</p>
      <p>Shares: {this.state.user.amount}</p>
      <p>Value of a share: {this.state.price} SEK</p>
      </div>
      <div className="form">
      <form onSubmit={this.submitBalence}>
        <label htmlFor="balence">Add to balence</label>
        <input id="balence" name="balence" type="number" />

        <button>Add to balence</button>
      </form>
      <LineChart width={window.innerWidth/2} height={window.innerHeight/4} data={this.state.graph.slice(-10)} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      </LineChart>
      <form onSubmit={this.submitPurchase}>
        <label htmlFor="amount">How many do you want to buy?</label>
        <input id="purchaseAmount" name="purchaseAmount" type="number" min="1" />

        <button>Purchase</button>
      </form>
      <form onSubmit={this.submitSell}>
        <label htmlFor="amount">How many do you want to sell?</label>
        <input id="sellAmount" name="sellAmount" type="number" min="1" max={this.state.user.amount} />

        <button>Sell</button>
      </form>
      </div>
      </div>
      );
    }
  }

export default Chat