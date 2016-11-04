import React from 'react';

export default(props) => {
	const styles = {
		instructions: {
			// border: "3px solid white",
			fontFamily: "'Oswald', sans-serif",
			padding: "3%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "center"
		},
		player: {
			display: "flex",
			marginTop: "2%"
		},
		p1photo: {
			width: 140,
			height: 200,
			backgroundImage: "url('http://i.imgur.com/YZo9IMF.png')",
			backgroundSize: "cover",
		},
		p2photo: {
			width: 140,
			height: 200,
			backgroundImage: "url('http://i.imgur.com/2uNdffe.png')",
			backgroundSize: "cover",
		},
		info: {
			width: 300,
			fontSize: "24px",
			position: "relative",
			left: 50,
			alignSelf: "center",
			textAlign: "left"
		},
		welcome: {
			fontSize: '32px'
		},
		anywhere: {
			fontSize: '24px'
		},
		controls: {
			fontSize: '20px',
		}
	}
	return (
		<div style={styles.instructions}>
			<div style={styles.welcome}>Welcome to REACT MAN!</div>
			<div style={styles.anywhere}>Click anywhere to begin</div>
			<div style={styles.player}>
				<div style={styles.p1photo}></div>
				<div style={styles.info}>
					<div>Player 1 (bottom right)</div>
					<div style={styles.controls}>Move: up down left right</div>
					<div style={styles.controls}>Bomb: space</div>
				</div>
			</div>
			<div style={styles.player}>
				<div style={styles.p2photo}></div>
				<div style={styles.info}>
					<div>Player 2 (top left)</div>
					<div style={styles.controls}>Move: w a s d</div>
					<div style={styles.controls}>Bomb: e</div>
				</div>
			</div>
		</div>
	)
}
