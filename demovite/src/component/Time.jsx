import React, { Component } from 'react'

export default class Time extends Component {
  render() {
    // logic
    let  date = new Date();
    return (
      <div>
        <p>{date.toDateString()}</p>
      </div>
    )
  }
}
