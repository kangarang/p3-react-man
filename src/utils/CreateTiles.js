const createTiles = function(){
  const tileStates = [];
  for ( let j = 9; j >= 1; j-- ) {
    for ( let i = 1; i <= 9; i++ ) {
      let obj = {}
      obj.x = i;
      obj.y = j;
      obj.playerOne = false
      obj.crate = false
      if (obj.y%2 === 0 && obj.x%2 === 0) {
        obj.cement = true
      }
      obj.bomb = false
      obj.playerTwo = false
      obj.fire = false
      console.log(obj)
      tileStates.push(obj)
    }
  }
  const rando = Math.floor(Math.random() * 81)
  if (tileStates)
  tileStates
  tileStates[rando].playerOne = true

  return tileStates;

};

module.exports = createTiles;
