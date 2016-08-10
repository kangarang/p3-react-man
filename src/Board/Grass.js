import React, {Component} from 'react';
import '../Board.css'

class Grass extends Component {

  isPlayer(comp, player) {
    if (comp[0] === player[0] && comp[1] === player[1]){
      return <div className="dot"> </div>
    }
  }

  render(){
    return(
      <div className="grass">
        {this.props.position}
        {this.isPlayer(this.props.position, this.props.coords)}
      </div>
    )
  }
}

export default Grass;
