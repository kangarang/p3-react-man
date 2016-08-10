import React, {Component} from 'react';
import '../Board.css'

class Cement extends Component {

  isPlayer(comp, player) {
    if (comp[0] === player[0] && comp[1] === player[1]){
      return <div className="dot"> </div>
    }
  }

  render(){
    return(
      <div className="cement">
        {this.props.position} {/*renders tile position for my own testing purpose*/}
      </div>
    )
  }
}

export default Cement;
