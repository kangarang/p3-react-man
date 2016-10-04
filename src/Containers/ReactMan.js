import React, {Component} from 'react';
import '../Styles/ReactMan.css'
import NavLink from '../utils/NavLink'

class ReactMan extends Component {
    render() {
        return (
            <div className="ReactMan">
                <div className="navContainer">
                    <NavLink className="links" to='/high-scores' onlyActiveOnIndex>HighScores</NavLink>
                    <NavLink className="links" to="/game" onlyActiveOnIndex>Play the game</NavLink>
                </div>
                <div className="bottom">
                    {this.props.children}
                </div>
            </div>
        )
    };
}

export default ReactMan;
