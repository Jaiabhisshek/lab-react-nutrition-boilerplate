import React, { Component } from 'react';
import './App.css';
import Foodbox from './Components/Foodbox'
import Fooddata from './Components/Fooddata';
import Search from './Components/Search'

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       search: ""
    }
  }
  
  handleSearch = (info) => {
    this.setState({search: info})
  }

  

  render(){
    return(
      <>
      <h1>Search</h1>
      <Search handleSearch={this.handleSearch}/>

      {
        Fooddata.filter((el) => {
          if(this.state.search == ""){
            return el 
          }
          else if(el.name.toLowerCase().includes(this.state.search.toLowerCase())){
            return el 
          }
        }).map((el) => {
          return(
            <div key={el.id}>
              <Foodbox food = {el} />
            </div>
          )
        })
      }

      </>
    )
  }
}

export default App