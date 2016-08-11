import React, { Component } from 'react';
import './ZeroZero.css';

class ZeroZero extends Component {

  color() {
    const vis = this.props.visual
    this.props.locate(vis)
    if (vis === "man") {
      return <div className="man"><img role="presentation" className="icon" src="http://icons.iconarchive.com/icons/yellowicon/game-stars/128/Bomberman-icon.png"></img></div>
    } else if (vis === "earth") {
      return <div className="earth"></div>
    } else if (vis === "wall") {
      return <div className="wall"><img role='presentation' className='icon' src="https://cdn0.iconfinder.com/data/icons/city-space-1/512/brick_wall-512.png"></img></div>
    } else if (vis === "woman") {
      return <div className="woman"></div>
    } else if (vis === "bomb") {
      return <div className="bomb"><img role='presentation' className="icon" src="https://www.iconfinder.com/icons/1232/bomb_explosive_icon#size=128"></img></div>
    } else if (vis === "bombAndMan") {
      return <div className="bombAndMan"><img role="presentation" className="icon" src="http://d2.alternativeto.net/dist/icons/game-of-bombs_90024.png?width=64&height=64&mode=crop&upscale=false"></img></div>
    } else if (vis === "carry") {
      return <div className="carry"></div>
    } else if (vis === "fire") {
      return <div className="fire"></div>
    } else if (vis === "crate") {
      return <div className="crate"></div>
    }
  }

  render() {
    return (
      <div className="ZeroZero">
        {this.color()}
      </div>
    );
  }
}

export default ZeroZero;
