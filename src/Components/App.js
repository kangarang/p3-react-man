import React, { Component } from 'react';
import NavLink from './NavLink';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../Styles/App.css';
import '../Styles/Game.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Header">REACT MAN</h1>
        <ul className="nav nav-tabs">
          <li role="presentation"><NavLink className="links" to='/' onlyActiveOnIndex>Home</NavLink>{" "}{" "}</li>
          <li role="presentation"><NavLink className="links" to='/about_makers' onlyActiveOnIndex>About The Makers</NavLink>{" "}{" "}</li>
          <li role="presentation"><NavLink className="links" to='/bomberman' onlyActiveOnIndex>REACT MAN</NavLink></li>
        </ul>
        <div className='bottom'>
          {this.props.children}
        </div>
      </div>
      );
    }
  }

export default App;
