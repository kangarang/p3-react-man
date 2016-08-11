import React, {Component} from 'react';
// import Grass from './Tiles/Grass.js';
// import Cement from './Tiles/Cement.js';
// import movement from './utils/Movement.js';
import createTiles from './utils/CreateTiles.js';
import TileContainer from './TileContainer.js';
import './Board.css';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      tiles: []
    }
  }; //End Board, here is where player coords are changed, thus rendering components with player or not

  handleKeyDown(event){
    console.log(event);
    // if (movement(event, this.state.playerOneX, this.state.playerOneY)){
    //   this.setState(movement(event, this.state.playerOneX, this.state.playerOneY, this.state.crates));
    // }
  };

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
    this.setState({tiles: createTiles()});
  }; //Adds listener when component mounts

  render(){
    return(
      <TileContainer tiles={this.state.tiles} />
    )
  }; //Renders (duh) the key here is that the component is the same BUT coords identify WHICH
}

export default Board;
