import React, {Component} from 'react';
import NavLink from '../utils/NavLink';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
	render() {
		const styles = {
			container: {
				textAlign: "center",
				backgroundColor: 'black',
				fontFamily: "'Press Start 2P'",
				width: "100vw",
				minHeight: "100vh",
                boxSizing: 'border-box'
			},
			header: {
				color: 'cornflowerblue',
				margin: '0',
				paddingTop: '2%',
				paddingBottom: '1%',
				display: 'flex',
				justifyContent: 'center'
			},
			nav: {
				display: 'flex',
				justifyContent: 'space-around',
				fontSize: '16px',
			},
            third: {
                width: '33%'
            },
			bottom: {
                minHeight: "80vh",
				display: 'flex',
				borderTop: '3px solid cornflowerblue',
                marginTop: '10px',
				background: "url('https://media1.giphy.com/avatars/haydiroket.gif')",
                backgroundRepeat: "repeat-y",
                backgroundSize: "cover",
			}
		}
		return (
			<div style={styles.container}>
				<h1 style={styles.header}>REACT MAN</h1>
				<nav style={styles.nav}>
					<NavLink style={styles.third} to='/' onlyActiveOnIndex>Home</NavLink>
					<NavLink style={styles.third} to='/about-makers' onlyActiveOnIndex>About The Makers</NavLink>
					<NavLink style={styles.third} to='/game' onlyActiveOnIndex>REACT MAN</NavLink>
				</nav>
				<div style={styles.bottom}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
