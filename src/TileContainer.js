import React, {Component} from 'react';
import Grass from './Tiles/Grass.js';
import Cement from './Tiles/Cement.js';
import PlayerOne from './Tiles/PlayerOne.js';

class TileContainer extends Component {

  renderBoard(){
    const tiles = this.props.tiles
    let block = tiles.map(function(tile, t){
      if (tile.cement === true){
        return <Cement key={[tile.x, tile.y]} />
      } else if (tile.playerOne === true){
        return <PlayerOne key={[tile.x, tile.y]} />
      } else {
        return <Grass key={[tile.x, tile.y]} />
      }
    })
    return block
  };

  render(){
    console.log(this.props.tiles);
    return(
      <div className="tileContainer">{this.props.tiles.length ? this.renderBoard() : null}</div>
    )
  };

}

export default TileContainer;
