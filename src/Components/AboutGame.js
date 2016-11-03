import React, {Component} from 'react';
import AtvImg from 'react-atv-img';

class AboutGame extends Component {
	render() {
		const styles = {
			container: {
				width: '100vw',
				display: 'flex',
			    justifyContent: 'space-around',
			    alignItems: 'center',
			},
			atv: {
				height: '600px',
			    width: '680px',
			}
		};

		return (
			<div style={styles.container}>
				<AtvImg layers={['https://i.imgur.com/ZBxEnh2.png', 'https://i.imgur.com/76TpRZY.png']} staticFallback="https://i.imgur.com/5ndOzQw.png" style={styles.atv}/>
			</div>
		)
	};
};

export default AboutGame;
