import React, {Component} from 'react';
import update from 'react-addons-update'

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
    const position = this.state.tiles.filter(tile => tile.playerOne === true);
    const newPosition = movement(event, position[0]);
    // console.log(newPosition);
    // console.log(position);
    const atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1] && tile.cement === false && tile.crate === false)
    if (atPosition){
      const old = this.state.tiles.indexOf(position[0]);
      // const oldTile = this.state.tiles[old];
      const newer = this.state.tiles.indexOf(atPosition[0]);
      // const newTile = this.state.tiles[newer];
      // oldTile.playerOne = false;
      // newTile.playerOne = true;
      this.setState({
        tiles: update(this.state.tiles, {[old]: {playerOne: {$set: false}}})
      })
      this.setState({
        tiles: update(this.state.tiles, {[newer]: {playerOne: {$set: true}}})
      })
    }
    // const preTiles = this.state.tiles // store old tiles
    // const preCoords = preTiles.filter(tile => tile.playerOne === true); // where is player
    // const postCoords = movement(event, preCoords[0]); // where player wants to go
    //
    // const atPosition = preTiles.filter(tile => tile.x === postCoords[0] && tile.y === postCoords[1] && tile.cement === false && tile.crate === false)
    //
    // if (atPosition){
    //   const oldIndex = preTiles.indexOf(preCoords[0]);
    //   const newTiles = preTiles
    //   const newIndex = preTiles.indexOf(atPosition[0]);
    //   preTiles[oldIndex] = preTiles[newIndex]
    //   newTiles[newIndex] = preTiles[oldIndex]
    //
    //   this.setState({tiles: newTiles})
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
