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
        if ((currentY-1)%2 === 0 && currentX%2 === 0 ){
          return;
        }
        else if (currentY > 1){
          return this.setState({playerOneY: currentY - 1});
        }
        break;
      case "ArrowUp":
        if ((currentY+1)%2 === 0 && currentX%2 === 0 ){
          return;
        }
        else if (currentY < 9){
          return this.setState({playerOneY: currentY + 1});
        }
        break;
      case "ArrowLeft":
        if ((currentX-1)%2 === 0 && currentY%2 === 0 ){
          return;
        }
        else if (currentX > 1){
          return this.setState({playerOneX: currentX - 1});
        }
        break;
      case "ArrowRight":
        if ((currentX+1)%2 === 0 && currentY%2 === 0 ){
          return;
        }
        else if (currentX < 9){
          return this.setState({playerOneX: currentX + 1});
        }
        break;
      default:
      console.log("derpington");
      }
  };

  renderBoard(){
    const boardArr = [];
    for (let y = 9; y >= 1; y--){
      for (let x = 1; x <= 9; x++){
        if (x%2 === 0 && y%2 === 0) {
          boardArr.push(<Cement key={[x,y]} position={[x,y]}/>)
        } else {
          boardArr.push(<Grass key={[x,y]} position={[x,y]} coords={[this.state.playerOneX,this.state.playerOneY]}/>)
        }
      }
    }
    return boardArr;
  };

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }; //Adds listener when component mounts

  render(){
    return(
      <div className="blockContainer">
        {this.renderBoard()}
      </div>
    )
  }; //Renders (duh) the key here is that the component is the same BUT coords identify WHICH
}

export default Board;
