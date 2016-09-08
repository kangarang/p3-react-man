import React, { Component } from 'react';
import NavLink from './NavLink';
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="Header">REACT MAN</h1>
                <nav className="nav">
                    <NavLink className="navLinks" to='/' onlyActiveOnIndex>Home</NavLink>
                    <NavLink className="navLinks" to='/about_makers' onlyActiveOnIndex>About The Makers</NavLink>
                    <NavLink className="navLinks" to='/react-man/game' onlyActiveOnIndex>REACT MAN</NavLink>
                </nav>
                <div className='bottom'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
