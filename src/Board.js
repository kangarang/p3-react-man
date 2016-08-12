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

  bomb(bombIndex){
    const App = this
    window.setTimeout(function(){
      App.explosion(bombIndex)},3000)
  };

  explosion(bombIndex){
    this.setState({
      tiles: update(this.state.tiles, {[bombIndex]: {bomb: {$set: false}}})
    })
  };

  handleKeyDown(event){
    let position = this.state.tiles.filter(tile => tile.playerOne === true);
    let newPosition = movement(event, position[0]);
    let atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1] && tile.cement === false && tile.crate === false && tile.bomb === false)
    if (atPosition.length){
      const old = this.state.tiles.indexOf(position[0]);
      const newer = this.state.tiles.indexOf(atPosition[0]);
      this.setState({
        tiles: update(this.state.tiles, {[old]: {playerOne: {$set: false}}})
      })
      this.setState({
        tiles: update(this.state.tiles, {[newer]: {playerOne: {$set: true}}})
      })
    } else if (newPosition === "bomb") {
      console.log("plant bomb");
      const i = this.state.tiles.indexOf(position[0]);
      this.setState({
        tiles: update(this.state.tiles, {[i]: {bomb: {$set: true}}})
      })
      if (this.state.tiles[i].bomb === true) {
          return this.bomb(i);
        };

    } else return
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
