import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          img: "https://i.imgur.com/jImRpPw.jpg",
          name: "AirPods Pro",
          price: 11111111249,
          count: 0
        },
        {
          img: "https://i.imgur.com/LUyQhmF.jpg",
          name: "Nintendo Switch",
          price: 299,
          count: 0
        },
        {
          img: "https://i.imgur.com/CugpEfY.jpg",
          name: "PS5",
          price: 499,
          count: 0
        },
        {
          img: "https://i.imgur.com/HgPROm3.jpg",
          name: "Xbox Series X",
          price: 499,
          count: 0
        },
        {
          img: "https://i.imgur.com/SH7FrjV.jpg",
          name: "Iphone 14 Pro Max - 1TB",
          price: 1599,
          count: 0
        },
        {
          img: "https://i.imgur.com/1Vf4DWy.jpg",
          name: "Samsung S22 Ultra - 1TB",
          price: 1399,
          count: 0
        },
        {
          img: "https://i.imgur.com/69V42nb.jpg",
          name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB)",
          price: 4699,
          count: 0
        },
        {
          img: "https://i.imgur.com/TaO01Rv.jpg",
          name: "2022 Mac Studio M1 Ultra (128GB RAM | 8TB)",
          price: 6999,
          count: 0
        },
        {
          img: "https://i.imgur.com/PXJj7z0.jpg",
          name: "Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)",
          price: 4950,
          count: 1
        }
      ], 
      total: 217000000000,
      totalBuy: 0,
      totalSell: 0,
      percent : 0,
    }
  }
  handleBuy = (index) => {
    const newData = [...this.state.items];
    const itemPrice = newData[index].price;
    const totalBuy = this.state.totalBuy + itemPrice;
    const total = this.state.total - itemPrice;
    if(this.state.total -itemPrice > 0) {
      newData[index].count += 1;
      const percent = (totalBuy / 217000000000);
      this.setState({ items: newData, totalBuy, total, percent });
    }

   
  }
  handleSell = (index) => {
    const newData = [...this.state.items];
    const itemPrice = newData[index].price;
    if (newData[index].count > 0) {
      newData[index].count -= 1;
      const totalSell = this.state.totalSell + itemPrice;
      const total = this.state.total + itemPrice;
      const totalBuy = this.state.totalBuy - itemPrice; 
      const percent = (totalBuy / 217000000000);
      this.setState({ items: newData, totalSell, total, percent, totalBuy });
    }
  }

  render() {
    return (
      <div className='App'>
        <Header total={this.state.total} percent={this.state.percent} />
        <div className='container'>
          <ItemList data={this.state.items} onBuy={this.handleBuy} onSell={this.handleSell} />
        </div>
      </div>
    );
  }
}

export default App;
