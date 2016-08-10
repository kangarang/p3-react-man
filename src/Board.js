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
        if (this.state.playerOneY < 3){
          this.setState({playerOneY: currentY + 1});
        }
        break;
      case "ArrowLeft":
        if (this.state.playerOneX > 1){
          this.setState({playerOneX: currentX - 1});
        }
        break;
      case "ArrowRight":
        if (this.state.playerOneX < 3){
          this.setState({playerOneX: currentX + 1});
        }
        break;
      default:
      console.log("derp");
      }
  }; //Movement logic, hardcoded numbers are min/max for coords.

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }; //Adds listener when component mounts

  render(){
    return(
      <div className="blockContainer">
        <Grass position={[1,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[2,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,3]} coords={[this.state.playerOneX, this.state.playerOneY]}/><br/>
        <Grass position={[1,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Cement position={[2,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,2]} coords={[this.state.playerOneX, this.state.playerOneY]}/><br/>
        <Grass position={[1,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[2,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/>
        <Grass position={[3,1]} coords={[this.state.playerOneX, this.state.playerOneY]}/><br/>
      </div>
    )
  }; //Renders (duh) the key here is that the component is the same BUT coords identify WHICH
}

export default Board;
