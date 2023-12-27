import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
        <div id='search' style={{margin: '20px'}}>
            <input type="text" placeholder='Enter something' onChange={(e) => this.props.handleSearch(e.target.value)} />
        </div>
    );
  }
}