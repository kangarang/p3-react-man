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
		const styles = {
			grass: {
	            backgroundImage: "url('https://i.imgur.com/8VvWcuc.jpg')",
	            backgroundSize: "cover",
	            height: "11.11%",
	            width: "11.11%",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center"
	        },
		}
		return this.props.tiles.map(tile => {
			if (tile.cement === true) {
				return <div style={styles.grass}><Cement key={[tile.x, tile.y]}/></div>
			} else if (tile.playerOne === true && tile.bomb === false) {
				return <div style={styles.grass}><PlayerOne key={[tile.x, tile.y]}/></div>
			} else if (tile.bomb === true && tile.playerTwo === true) {
				return <div style={styles.grass}><PTwoBomb key={[tile.x, tile.y]}/></div>
			} else if (tile.playerTwo === true && tile.bomb === false) {
				return <div style={styles.grass}><PlayerTwo key={[tile.x, tile.y]}/></div>
			} else if (tile.crate === true) {
				return <div style={styles.grass}><Crate key={[tile.x, tile.y]}/></div>
			} else if (tile.bomb === true && tile.playerOne === false) {
				return <div style={styles.grass}><Bomb key={[tile.x, tile.y]}/></div>
			} else if (tile.bomb === true && tile.playerOne === true) {
				return <div style={styles.grass}><POneBomb key={[tile.x, tile.y]}/></div>
			} else if (tile.fire === true) {
				return <div style={styles.grass}><Fire key={[tile.x, tile.y]}/></div>
			} else {
				return <div style={styles.grass}><Grass key={[tile.x, tile.y]}/></div>
			}
		})
	}; // Renders board depending on state of the game board. Uses single purpose stateless functions to render.

	render() {
		const styles = {
			container: {
				// width: "100%",
				// maxWidth: "800px",
				// maxHeight: "800px",
				height: "650px",
				width: "800px",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "flex-start",
				alignItems: "flex-start"
				// width: "800px",
				// height: "600px"
			},
			game: {
                position: "relative",
				width: "100vw",
				height: "90vh",
				alignSelf: "center",
				// border: "5px solid white",
			},
			content: {
				maxWidth: "800px",
				maxHeight: "800px",
				height: "auto",
				width: "auto",
				display: 'flex',
				justifyContent: 'space-around'
			}
		}
		return (
			<div style={styles.container}>
				{this.props.tiles.length
					? this.renderBoard()
					: null}
			</div>
		) //If board had length(tile func has completed), render board.
	};

};

export default TileContainer;
