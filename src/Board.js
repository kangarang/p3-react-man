import React, {Component} from 'react';
import Grass from './Tiles/Grass.js';
import Cement from './Tiles/Cement.js';
import './Board.css';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerOneX: 1,
      playerOneY: 1
    }
  }; //End Board, here is where player coords are changed, thus rendering components with player or not

  handleKeyDown(event){
    event.preventDefault();
    const currentY = this.state.playerOneY;
    const currentX = this.state.playerOneX;
    switch (event.code){
      case "ArrowDown":
        if (this.state.playerOneY > 1){
          this.setState({playerOneY: currentY - 1});
        }
        break;
      case "ArrowUp":
        if (this.state.playerOneY < 9){
          this.setState({playerOneY: currentY + 1});
        }
        break;
      case "ArrowLeft":
        if (this.state.playerOneX > 1){
          this.setState({playerOneX: currentX - 1});
        }
        break;
      case "ArrowRight":
        if (this.state.playerOneX < 9){
          this.setState({playerOneX: currentX + 1});
        }
        break;
      default:
      console.log("derp");
      }
  };

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }; //Adds listener when component mounts

  render(){
    // for (let y = 9; y >= 1; y--){
    //   for (let x = 1; x <= 9; x++){
    //     if (x%2 && y%2 === 0)
    //   }
    // }
    return(
      <div className="blockContainer">
        <Grass position={[1,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[2,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[4,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[6,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[8,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,9]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[2,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[4,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[6,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[8,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,8]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[2,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[4,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[6,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[8,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,7]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[2,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[4,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[6,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[8,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,6]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[2,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[4,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[6,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[8,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,5]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[2,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[4,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[6,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[8,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,4]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[2,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[4,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[6,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[8,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[2,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[4,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[6,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[8,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

        <Grass position={[1,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[2,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[4,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[5,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[6,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[7,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[8,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[9,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>

      </div>
    )
  }; //Renders (duh) the key here is that the component is the same BUT coords identify WHICH
}

export default Board;
