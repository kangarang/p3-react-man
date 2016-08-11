import React, { Component } from 'react';
import './ZeroZero.css';

class ZeroZero extends Component {

  color() {
    if (this.props.visual === "man") {
      return <div className="man"><img role="presentation" className="icon" src="http://icons.iconarchive.com/icons/yellowicon/game-stars/128/Bomberman-icon.png"></img></div>
    } else if (this.props.visual === "earth") {
      return <div className="earth"></div>
    } else if (this.props.visual === "wall") {
      return <div className="wall"><img role='presentation' className='icon' src="https://cdn0.iconfinder.com/data/icons/city-space-1/512/brick_wall-512.png"></img></div>
    } else if (this.props.visual === "woman") {
      return <div className="woman"></div>
    } else if (this.props.visual === "bomb") {
      return <div className="bomb"><img role='presentation' className='icon' src="http://icdn.pro/images/en/e/x/explosive-bombs-icone-5950-128.png"></img></div>
    } else if (this.props.visual === "bombAndMan") {
      return <div className="bombAndMan"><img role="presentation" className="icon" src="http://d2.alternativeto.net/dist/icons/game-of-bombs_90024.png?width=64&height=64&mode=crop&upscale=false"></img></div>
    } else if (this.props.visual === "carry") {
      return <div className="carry"></div>
    } else if (this.props.visual === "fire") {
      return <div className="fire"></div>
    } else if (this.props.visual === "crate") {
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
