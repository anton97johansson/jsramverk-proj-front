import React, { Component } from 'react'
import readme from './README.md'
const ReactMarkdown = require('react-markdown')

class Week1 extends Component {
  constructor(props) {
    super(props)

    this.state = { theReadme: null }
  }

  componentWillMount() {
    fetch(readme).then((response) => response.text()).then((text) => {
      this.setState({ theReadme: text })
    })
  }

  render() {
    return (
      <div className="report">
        <ReactMarkdown source={this.state.theReadme} />
      </div>
    )
  }
}

export default Week1