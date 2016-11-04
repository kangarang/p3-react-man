import React, {Component} from 'react';
import NavLink from '../utils/NavLink'

class ReactMan extends Component {
    render() {
        const styles = {
            container: {
                width: "100vw"
            },
            nav: {
                display: "flex",
                justifyContent: "space-around",
                backgroundColor: "black",
                paddingTop: "15px"
            },
            content: {
                width: "100vw",
                minHeight: "100vh"
            }
        }
        return (
            <div style={styles.container}>
                <div style={styles.nav}>
                    <NavLink className="links" to='/high-scores' onlyActiveOnIndex>HighScores</NavLink>
                    <NavLink className="links" to="/game" onlyActiveOnIndex>Game</NavLink>
                </div>
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        )
    };
}

export default ReactMan;
