import React, { Component } from 'react';
import help from '../utils/helpers.js'
import './App.css';
import { Button } from 'react-bootstrap';
import helpers from '../utils/AuthHelpers';

class HighScores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: []
    }
  }

  show(e) {
    e.preventDefault()
    help.showAll().then( res => {
      return res.json()
    }).then( json => {
      console.log('all responses' + json);
      this.setState({
        scores: [json]
      })
    })
  }

  showScores(score) {
    if (score) {
      Object.keys(score).map( single => {
        let time = score[single].time
        time = time.split("T").join(" at: ");
        time = time.split(".");
        time = time[0];
        let initials = score[single].initials
        if (time && initials) {
          console.log(time);
          console.log(initials);
          return (
            <div>
              <br></br>
              <div>Hello{initials}{"   "}{time}</div>
            </div>
          )
        }
      })
    }
  }

  logOut(e) {
    e.preventDefault()
    helpers.signOut()
  }

  render() {
    let scores = {}
    if (this.state.scores) {
      scores = this.state.scores[0]
    }
    return (
      <div className="HighScores">
        <h2>High Scores</h2>
        <Button onClick={(event) => this.show(event)}>Show All High Scores</Button>
        <Button onClick={(event) => this.logOut(event)}>Log Out</Button>
        {this.showScores(scores)}
      </div>
    )
  }
}

export default HighScores;
