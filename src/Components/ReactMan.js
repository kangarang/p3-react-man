import React, {Component} from 'react';
import '../Styles/ReactMan.css'
import NavLink from './NavLink'

class ReactMan extends Component {
    render() {
        return (
            <div>
                <div className="navContainer">
                    <NavLink className="links" to='/react-man/high_scores' onlyActiveOnIndex>HighScores</NavLink>
                    <NavLink className="links" to="/react-man/game" onlyActiveOnIndex>Play the game</NavLink>
                </div>
                <div className="displayUser">
                    <h4>Welcome to REACT MAN!</h4>
                </div>
                <div className="bottom">
                    {this.props.children}
                </div>
            </div>
        )
    };
}

export default ReactMan;
