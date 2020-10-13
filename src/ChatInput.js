import React, { useState } from 'react';


const ChatInput = ({ socket }) => {
    const [msg, setMsg] = useState("");
    const [nick, setNick] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting: ${msg} ${nick} `)
        socket.emit('chat message', {msg: msg, nick: nick});
        setMsg("");
    }
  return (
    <div>
    <form>
    <label>
    Nick:
    <input
      type="text"
      className="newMessage"
      value={nick}
      required
      onChange={e => setNick(e.target.value)}
    />
  </label>
    <label>
    Message:
    <input
      type="text"
      className="newMessage"
      value={msg}
      required
      onChange={e => setMsg(e.target.value)}
    />
  </label>
  <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
    </div>
  )
}

export default ChatInput
// <li>
//   <Link to={`${url}/1`}>Week 1</Link>
// </li>