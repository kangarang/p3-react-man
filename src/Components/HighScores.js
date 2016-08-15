import React, { Component } from 'react';
import help from '../utils/helpers.js'
import './App.css';
import { Button } from 'react-bootstrap';
import helpers from '../utils/AuthHelpers';

class HighScores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: [],
      time: []
    }
  }

  save(e) {
    e.preventDefault()
    const saveObj = {
      winner: "Dan",
      time: new Date()
    }
    if (saveObj) {
      help.save(saveObj).then( res => {
        return res.json()
      }).then( json => {
        this.setState({
          highScores: json
        })
      })
    }
  }

  show(e) {
    e.preventDefault()
    help.showAll().then( res => {
      return res.json()
    }).then( json => {
      console.log('all responses' + json);
      let name;
      let time;
      for (let key in json) {
        if (json.hasOwnProperty(key)) {
          name = json[key].winner;
          time = "Date: " + json[key].time.split("T").join(" at Time: ");
          time = time.split(".");
          time = time[0];
        }
        console.log(name);
        console.log(time);
      }
    })
  }

  logOut(e) {
    e.preventDefault()
    helpers.signOut()
  }

  render() {
    // let name = this.state.name
    // let time = this.state.time
    return (
      <div className="HighScores">
        <h2>High Scores</h2>
        <Button onClick={(event) => this.save(event)}>Save High Scores</Button>
        <Button onClick={(event) => this.show(event)}>Show All High Scores</Button>
        <Button onClick={(event) => this.logOut(event)}>Log Out</Button>
      </div>
    )
  }
}

export default HighScores;
