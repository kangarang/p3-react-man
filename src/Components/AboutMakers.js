import React, {Component} from 'react';

class AboutMakers extends Component {
	render() {
		const styles = {
			makers: {
				display: 'flex',
				justifyContent: 'space-around',
                background: "url('https://media1.giphy.com/avatars/haydiroket.gif')",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
				color: 'cornflowerblue',
				width: '100%',
				minHeight: "80vh",
			},
            wrapper: {
                marginTop: '10px',
                border: '5px solid cornflowerblue',
                width: '80%',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'space-around'
            },
			third: {
				display: 'flex',
                justifyContent: 'space-around',
				flexDirection: 'column',
				// paddingBottom: '75%',
                alignItems: 'center',
                width: '33%',
                marginBottom: '25px'
			},
            image: {
                width: '300px',
                height: 'auto'
            }
		};

		return (
			<div style={styles.makers}>
				<div style={styles.wrapper}>
					<div style={styles.third}>
						<h2>Isaac</h2>
						<img style={styles.image} alt="" src="http://i.imgur.com/NEXrR4M.png"/>
						<a href="https://www.linkedin.com/in/isaackang">LinkedIn</a>
						<br></br>
						<a href="https://github.com/kangarang">GitHub</a>
					</div>
					<div style={styles.third}>
						<h2>Daniel</h2>
						<img style={styles.image} alt="" src="http://i.imgur.com/q23PkKQ.png"/>
						<a href="https://www.linkedin.com/in/danielyochumjr">LinkedIn</a>
						<br></br>
						<a href="https://github.com/dannersy">GitHub</a>
					</div>
					<div style={styles.third}>
						<h2>Shreiya</h2>
						<img style={styles.image} alt="" src="http://i.imgur.com/4f5nmF3.png"></img>
						<a href="https://www.linkedin.com/in/shreiya">LinkedIn</a>
						<br></br>
						<a href="https://github.com/Shreiya">GitHub</a>
					</div>
				</div>

			</div>
		)
	};
};

export default AboutMakers;
