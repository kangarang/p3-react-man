import React, {Component} from 'react';
import Grass from './Tiles/Grass.js';
import Cement from './Tiles/Cement.js';
import movement from './utils/Movement.js'
import setCrates from './utils/Crates.js';
import './Board.css';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerOneX: 9,
      playerOneY: 1,
      crates: []
    }
  }; //End Board, here is where player coords are changed, thus rendering components with player or not

  handleKeyDown(event){
    if (movement(event, this.state.playerOneX, this.state.playerOneY)){
      this.setState(movement(event, this.state.playerOneX, this.state.playerOneY, this.state.crates));
    }
  };

  renderBoard(){
    const boardArr = [];
    for (let y = 9; y >= 1; y--){
      for (let x = 1; x <= 9; x++){
        if (x%2 === 0 && y%2 === 0) {
          boardArr.push(<Cement key={[x,y]} position={[x,y]}/>)
        } else {
          boardArr.push(<Grass key={[x,y]} position={[x,y]} crates={this.state.crates} coords={[this.state.playerOneX,this.state.playerOneY]}/>)
        }
      }
    }
    return boardArr;
  };

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
    this.setState({crates: setCrates()})
  }; //Adds listener when component mounts

  render(){
    return(
      <div className="blockContainer">
        {this.renderBoard()}
      </div>
    )
  }; //Renders (duh) the key here is that the component is the same BUT coords identify WHICH
}

export default Board;
