import React, {Component} from 'react';
import createTiles from './utils/CreateTiles.js';
import TileContainer from './TileContainer.js';
import movement from './utils/Movement.js';
import './Board.css';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      tiles: []
    }
  };

  handleKeyDown(event){
    // const position = this.state.tiles.filter(tile => tile.playerOne === true);
    // const newPosition = movement(event, position[0]);
    // const atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1])
    // if (this.state.tiles.indexOf(atPosition[0])){
    //   this.state.tiles[this.state.tiles.indexOf(atPosition[0])]
    // };
    // if (atPosition) {
    //   this.setState
    // }
  };

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
    this.setState({tiles: createTiles()});
  }; //Adds event listener and setsState of gameboard

  render(){
    return(
      <TileContainer tiles={this.state.tiles} />
    )
  }; //Container worried about one state that changes based on user input.
}

export default Board;
