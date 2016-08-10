import React, { Component } from 'react';
import './ZeroZero.css';

class ZeroZero extends Component {
  // earth, bomberman, bomberwoman, bomb, drop, carry, fire, crate, wall

  color() {
    if (this.props.visual === "bomberman") {
      return <div className="bomberman"></div>
    } else if (this.props.visual === "earth") {
      return <div className="earth"></div>
    } else if (this.props.visual === "wall") {
      return <div className="wall"></div>
    } else if (this.props.visual === "bomberwoman") {
      return <div className="bomberwoman"></div>
    } else if (this.props.visual === "bomb") {
      return <div className="bomb"></div>
    } else if (this.props.visual === "drop") {
      return <div className="drop"></div>
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
