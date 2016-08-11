const movement = function(event, currentX, currentY, crates){
    event.preventDefault();
    switch (event.code){
      case "ArrowDown":
        if ((currentY-1)%2 === 0 && currentX%2 === 0 ){
          return {playerOneY: currentY, playerOneX: currentX};
        }
        else if (currentY > 1){
          return {playerOneY: currentY - 1, playerOneX: currentX};
        }
        break;
      case "ArrowUp":
        if ((currentY+1)%2 === 0 && currentX%2 === 0 ){
          return {playerOneY: currentY, playerOneX: currentX};
        }
        else if (currentY < 9){
          return {playerOneY: currentY + 1, playerOneX: currentX};
        }
        break;
      case "ArrowLeft":
        if ((currentX-1)%2 === 0 && currentY%2 === 0 ){
          return {playerOneY: currentY, playerOneX: currentX};
        }
        else if (currentX > 1){
          return {playerOneY: currentY, playerOneX: currentX - 1};
        }
        break;
      case "ArrowRight":
        if ((currentX+1)%2 === 0 && currentY%2 === 0 ){
          return {playerOneY: currentY, playerOneX: currentX};
        }
        else if (currentX < 9){
          return {playerOneY: currentY, playerOneX: currentX + 1};
        }
        break;
      default:
        return
      }
  };

module.exports = movement;
