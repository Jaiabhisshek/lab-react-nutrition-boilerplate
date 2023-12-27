import React, { Component } from 'react';
import List from './List';

export default class FoodBox extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         totalAmount: 0
      }
    }

    handleCount = (value) => {
        this.setState({count: value})
    }
    
    handleTotal = () => {
        this.setState({totalAmount: this.state.count * this.props.food.cal})
    }

    handleReset = () => {
        this.setState({count: 0, totalAmount: 0})
    }

  render() {    

    return (
      <div id='foodBox'>
        <img src={this.props.food.img} />
        <h1>{this.props.food.name}</h1>
        <p>{this.props.food.cal}</p>
        <div>
            <input type="number" value={this.state.count} placeholder='Enter a number here' onChange={(e) => this.handleCount(e.target.value)} />
            <button onClick={this.handleTotal}>Add</button>
        </div>
        <List count={this.state.count} name={this.props.food.name} totalAmount={this.state.totalAmount} handleReset={this.handleReset}/>
      </div>
    );
  }
}