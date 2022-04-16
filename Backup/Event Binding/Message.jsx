import React, { Component } from 'react'

export class Message extends Component {
    state= {
        message : ""
    }
    gmHandler= (message) => {
        this.setState({message:message})
    }
  render() {
    return (
      <>
        <h1>Hello, {this.state.message} all of you...!</h1>
        <button onClick = {this.gmHandler.bind(this,"GM")} className = "btn btn-success">GM</button>
        <button onClick = {this.gmHandler.bind(this,"GA")} className = "btn btn-warning">GA</button>
        <button onClick = {this.gmHandler.bind(this,"GN")} className = "btn btn-dark">GN</button>
      </>
    )
  }
}

export default Message


