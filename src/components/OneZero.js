import React, { Component } from 'react';

class OneZero extends Component {
  constructor(props) {
    super(props)
  }

  visual = () => {
    if (this.props.visual) {
      let visual = this.props.visual
      if (visual === "bomberman") {
        return <div>{"BOMBERMAN! INSERT IMAGE HERE"}</div>
      }
    }

  }

  render() {
    return (
      <div className="OneZero">
        {this.props.visual}
      </div>
    );
  }
}

export default OneZero;
