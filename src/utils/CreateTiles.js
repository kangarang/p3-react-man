const createTiles = function(){
  const tiles = [
    {
      x: 1,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 3,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 5,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 7,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 9,
      y: 9,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 3,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 5,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 7,
      y: 8,
      crate: false,
      playerOne: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 9,
      y: 8,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 3,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 5,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 7,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 9,
      y: 7,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 3,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 5,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 7,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 9,
      y: 6,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 3,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 5,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 7,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 9,
      y: 5,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 3,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 5,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 7,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 9,
      y: 4,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 3,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 5,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 7,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 9,
      y: 3,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 3,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 5,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 7,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: true
    },
    {
      x: 9,
      y: 2,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 1,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 2,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 3,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 4,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 5,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 6,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 7,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 8,
      y: 1,
      playerOne: false,
      crate: false,
      bomb: false,
      cement: false
    },
    {
      x: 9,
      y: 1,
      playerOne: true,
      crate: false,
      bomb: false,
      cement: false
    }
  ];

  return tiles
};

module.exports = createTiles;
