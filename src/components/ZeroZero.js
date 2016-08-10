import React, { Component } from 'react';
import './ZeroZero.css';

class ZeroZero extends Component {

  color() {
    if (this.props.visual === "bomberman") {
      return <div className="bomberman"></div>
    } else if (this.props.visual === "earth") {
      return <div className="earth"></div>
    } else if (this.props.visual === "wall") {
      return <div className="wall"></div>
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
