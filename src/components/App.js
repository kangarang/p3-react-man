import React, { Component } from 'react';
import './App.css';
import Tile from './Tile'
import help from '../utils/helpers.js'

class App extends Component {
  constructor(props){
    super(props);
  }

  func = (fromChild) => {
    console.log(fromChild);
  }

  render(){
    return(
      <div className="App">
        <Tile coords={{x: 1, y: 3}} func={this.func.bind(this)}/>
        <Tile coords={{x: 2, y: 3}} func={this.func.bind(this)}/>
        <Tile coords={{x: 3, y: 3}} func={this.func.bind(this)}/>

        <Tile coords={{x: 1, y: 2}} func={this.func.bind(this)}/>
        <Tile wall={true} coords={{x: 2, y: 2}} func={this.func.bind(this)}/>
        <Tile coords={{x: 3, y: 2}} func={this.func.bind(this)}/>

        <Tile coords={{x: 1, y: 1}} func={this.func.bind(this)}/>
        <Tile coords={{x: 2, y: 1}} func={this.func.bind(this)}/>
        <Tile coords={{x: 3, y: 1}} func={this.func.bind(this)}/>
      </div>
    )
  }

}


export default App;
