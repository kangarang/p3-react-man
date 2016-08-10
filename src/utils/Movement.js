const handleKeyDown = function(event, x, y){
    event.preventDefault();
    switch (event.code){
      case "ArrowDown":
        if (y > 1){
          this.setState({playerOneY: y - 1});
        }
        break;
      case "ArrowUp":
        if (y < 3){
          this.setState({playerOneY: y + 1});
        }
        break;
      case "ArrowLeft":
        if (x > 1){
          this.setState({playerOneX: x - 1});
        }
        break;
      case "ArrowRight":
        if (x < 3){
          this.setState({playerOneX: x + 1});
        }
        break;
      default:
      console.log("derp");
      }
  };

module.exports = handleKeyDown
