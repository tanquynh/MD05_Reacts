import React, { Component } from 'react'

export default class Caculators extends Component {
    constructor(props){
        super(props)
      }
      render() {
        return (
          <div>
            <button className='calculator' onClick = {this.props.handleSum}>Caculator</button><br/>
            <label >Total : <input type="number" value={this.props.sum} readOnly/></label>
          </div>
        )
      }
}
