import React, { Component } from 'react'

export default class Bt3 extends Component {
  
  render() {
   let date = new Date();
    return (
      <div>
        <p>{date.toDateString()}</p>
      </div>
    )
  }
}
