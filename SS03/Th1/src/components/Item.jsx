import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

//   handleBuy = () => {
//     this.props.onBuy(this.props.index);
//   }

  render() {
    const { img, name, price,count } = this.props.data;
  

    return (
      <div className='element'>
        <img src={img} alt='Photo' />
        <p id='name'>{name}</p>
        <span id='price'>USD {price}</span>
        <div className='buyAndSellContainer'>
          <button className='btn-sell' id='sell' onClick = {() => this.props.onSell(this.props.index)} >
            Sell
          </button>
          <span id='amount'>{count}</span>
          <button className='btn-buy' id='buy'  onClick={()=>this.props.onBuy(this.props.index)} >
            Buy
          </button>
        </div>
      </div>
    );
  }
}