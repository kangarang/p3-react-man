import React, {Component} from 'react';
import Grass from '../Tiles/Grass.js';
import Cement from '../Tiles/Cement.js';
import PlayerOne from '../Tiles/PlayerOne.js';
import PlayerTwo from '../Tiles/PlayerTwo.js';
import Crate from '../Tiles/Crate.js';
import Bomb from '../Tiles/Bomb.js';
import Fire from '../Tiles/Fire.js';
import POneBomb from '../Tiles/POneBomb.js';
import PTwoBomb from '../Tiles/PTwoBomb.js';

class TileContainer extends Component {

    renderBoard() {
        return this.props.tiles.map( tile => {
            if (tile.cement === true){
                return <Cement key={[tile.x, tile.y]} />
            } else if (tile.playerOne === true && tile.bomb === false){
                return <PlayerOne key={[tile.x, tile.y]} />
            } else if (tile.bomb === true && tile.playerTwo === true) {
                return <PTwoBomb key={[tile.x, tile.y]} />
            } else if (tile.playerTwo === true && tile.bomb === false){
                return <PlayerTwo key={[tile.x, tile.y]} />
            } else if (tile.crate === true) {
                return <Crate key={[tile.x, tile.y]} />
            } else if (tile.bomb === true && tile.playerOne === false){
                return <Bomb key={[tile.x, tile.y]} />
            } else if (tile.bomb === true && tile.playerOne === true) {
                return <POneBomb key={[tile.x, tile.y]} />
            } else if (tile.fire === true) {
                return <Fire key={[tile.x, tile.y]} />
            } else {
                return <Grass key={[tile.x, tile.y]} />
            }
        })
    }; // Renders board depending on state of the game board. Uses single purpose stateless functions to render.

    render() {
        return(
            <div className="tileContainer">{this.props.tiles.length ? this.renderBoard() : null}</div>
        ) //If board had length(tile func has completed), render board.
    };

}

export default TileContainer;
