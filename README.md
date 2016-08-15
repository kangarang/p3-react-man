(Sourcing found at the bottom)

###REACT MAN###
by Isaac Kang, Shreiya Chowdhary and Daniel Yochum

REACT MAN is a group project built as a creative use demo of React.

###REACT MAN Logic###

The entirety of the game logic is rounded around a singular state being a large array of objects that contain coordinates and boolean values. The information is the status of each tile (player, bomb, wall, etc) as well as it's position on the board. The board is rendered differently every time the array is edited with the inputs of our players. After many revisions, we built it this way for two big reasons:
- Performance with React has proven better in this particular application. All components need to be "listening", running their own set of logic, for what they need to render. We found with board of this size, the less logic in the children components the better. In our case, rendering only the correct tile div with a className or picture based on the set of boolean values in an object rather than the state of itself. One giant parent state passed into a board constructor.
- Conditionals became easier (more possible) to write. Keeping track of children states in the parent can be very cumbersome if you're not building a site traditionally with what React is good for. Instead, all logic is done in the parent container, "game state" can now be edited with mild filtering.

The flow starts with our listener, looking for a keydown from either of our two players. When a direction is pressed, we run movement() with our player's current tile and the event. This returns an x and y with the proposed movement of the player. If a tile on the board exists and is considered moveable (no crate, bomb, etc), the objects/tiles with old position and new position is then updated with the proper player booleans.

If either player hits the key that plants our cartoon style bomb, a timer is set for each bomb that is placed. The timer runs our explosion function after three seconds. With the tile coordinates of our bomb, we make a new array of arrays, one for each direction, containing our possible coordinates to be exploded. The tricky part here is that each bomb blows up 2 squares in each direction but should stop at one if it hits a crate. A crate should blow up but can be used as cover, a wall shouldn't blow up and of course can be used as cover. We check that if one block away can't blow up, move to the next direction, if it can and the first block was not a crate, the second block from the bomb explodes.

To "animate" this, we had to get a little clever. Instead of removing the blocks that explode they are replace with fire. It works similarly in that there is a timer, but it is constantly running with a quicker interval. Even though it's slightly inconsistent, it works great with checking for a win condition, circumvents having a max of 8 separate timers for each bomb explosion, and now if someone walks into a fire after explosion, that player is destroyed. When fire tiles/objects in the state are detected by the clearFire function, the state is reset without the fire and the possible player who steps in. The win condition is satisfied on the next interval of our fireTimer, again filtering to see which players are still standing.

Sources:

Inspiration
  Bomberman
  - Hudson Soft Co., Ltd

Bomb SFX
  http://audiosoundclips.com/wp-content/uploads/2015/01/8-Bit-SFX_Explosion_02.mp3
  - Provided by Jesus Lastra via audiosoundclips.com under the CC license

Music
  https://soundcloud.com/eric-skiff/all-of-us?in=eric-skiff/sets/resistor-anthems
  - Provided by Eric Skiff via soundcloud.com/eric-skiff under the CC license

Gif
  https://media1.giphy.com/avatars/haydiroket.gif
  - From http://giphy.com/haydiroket

About-Game Effect
  npm react-atv : https://www.npmjs.com/package/react-atv
  - By https://www.npmjs.com/~herrkris

All other icons and imagery
  - http://www.shutterstock.com/
