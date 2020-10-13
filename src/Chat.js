import React, { Component } from 'react'
import ChatInput from './ChatInput';
import io from 'socket.io-client';

const socket = io.connect("https://socket-server.antonscript.me");
// const wholeSocket = io("http://localhost:3001");

class Chat extends Component {
    constructor() {
      super();
      this.state = { allMsg: [] };
    }
    componentDidMount() {
    socket.on("chat message", (message) => {
      this.setState({
        allMsg: [...this.state.allMsg, message]
      });
    });
  }
  renderChat() {
      const { allMsg } = this.state;
      console.log(allMsg);
      return allMsg.map(msg => (
            <p key={msg}>{
                msg}</p>
            ));
  }


    render() {
      return (
      <div>
      <h2>Messages:</h2>
      <div id="all-messages" className="all-messages">
      {this.renderChat()}
      </div>

      <p><strong>Write new message:</strong></p>
      <div className="form">
      <ChatInput socket={socket}/>
      </div>
      </div>
      );
    }
  }

export default Chat