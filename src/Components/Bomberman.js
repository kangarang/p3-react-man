import React, {Component} from 'react';
import '../Styles/Game.css';
import '../Styles/App.css';
import NavLink from './NavLink'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Bomberman extends Component {
    render() {
        return (
            <div>
                <div className="bigContainer">
                    <NavLink className="links" to="/bomberman/sign-up" onlyActiveOnIndex>Sign Up</NavLink>
                    <NavLink className="links" to="/bomberman/log-in" onlyActiveOnIndex>Log In</NavLink>
                    <NavLink className="links" to='/bomberman/high_scores' onlyActiveOnIndex>HighScores</NavLink>
                    <NavLink className="links" to="/bomberman/game" onlyActiveOnIndex>Play the game</NavLink>
                </div>
                <div className="bottom">
                    {this.props.children}
                </div>
            </div>
        )
    };
}

export default Bomberman;
