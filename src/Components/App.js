import React, { Component } from 'react';
import NavLink from './NavLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>BOMBERMAN APP COMPONENT</h2>
        <NavLink to='/' onlyActiveOnIndex>Home</NavLink>
        <NavLink to='/about_game' onlyActiveOnIndex>About The Game</NavLink>
        <NavLink to='/about_makers' onlyActiveOnIndex>About The Makers</NavLink>
        <NavLink to='/game' onlyActiveOnIndex>BOMBERMAN</NavLink>
        {this.props.children}
      </div>
    )
  }
}

export default App;
