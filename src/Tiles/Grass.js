import React, {Component} from 'react';
import '../Board.css'

class Grass extends Component {
  isPlayer(tile, player) {
    if (tile[0] === player[0] && tile[1] === player[1]){
      return <div className="dot"> </div>
    }
  } //Checks if coords of PLAYER and TILE IDENTIFIER match (props of parent, board position vs player's coords via state)

  hasCrate(tile, crates) {
    let showCrate = crates.map(function(crate){
      if (tile[0] === crate[0] && tile[1] === crate[1]) {
        return <div key={crate} className="crate"> C </div>
      }
    })
    return showCrate
  }

  render(){
    return(
      <div className="grass">
        {this.props.position}{/*renders tile position for my own testing purpose*/}
        {this.hasCrate(this.props.position, this.props.crates)}
        {this.isPlayer(this.props.position, this.props.coords)}{/*renders player position*/}
      </div>
    )
  }
}

export default Grass;
