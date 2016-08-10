import React, {Component} from 'react';
import '../Board.css'

class Grass extends Component {

  isPlayer(comp, player) {
    if (comp[0] === player[0] && comp[1] === player[1]){
      return <div className="dot"> </div>
    }
  } //Checks if coords of PLAYER and TILE IDENTIFIER match (props of parent, board position vs player's coords via state)

  render(){
    return(
      <div className="grass">
        {this.props.position} //renders tile position for my own testing purpose
        {this.isPlayer(this.props.position, this.props.coords)} //renders player position
      </div>
    )
  }
}

export default Grass;
