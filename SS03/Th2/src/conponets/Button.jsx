import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
     <button style={{background: this.props.background, color : this.props.color , onClick= {this.}}}>

        {this.props.text}
     </button>
    )
  }
}
