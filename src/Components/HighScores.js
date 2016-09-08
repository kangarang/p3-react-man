import React, { Component } from 'react';
import help from '../utils/helpers.js'
import '../Styles/App.css';
import { Button } from 'react-bootstrap';

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
            if (json) {
                let arr = []
                Object.keys(json).map( single => {
                    let newObje = {}
                    let time = json[single].time
                    time = time.split("T").join(" at: ");
                    time = time.split(".");
                    time = time[0];
                    let initials = json[single].initials
                    newObje.initials = initials
                    newObje.time = time
                    return arr.push(newObje)
                })
                this.setState({
                    scores: arr
                })
            } else {
                return
            }
        })
    }

    deleteScore(e) {
        e.preventDefault()
        let ident = e.target.value
        if (ident.user) {
            help.delete(ident, ident.user)
        } else if (ident.uid) {
            help.delete(ident, ident.uid)
        } else {
            return
        }
    }

    showScores(score, index) {
        if (score) {
            return (
                <div key={index} className="scoress">
                    {score.initials}{"  on  "}{score.time}
                    <button onClick={(event) => this.deleteScore(event)} value={score}>DELETE</button>
                </div>
            )
        } else {
            return
        }
    }


    // logOut(e) {
    //   e.preventDefault()
    //   helpers.signOut()
    // }
    

    render() {
        return (
            <div className="HighScores">
                <h2>High Scores</h2>
                <Button onClick={(event) => this.show(event)}>Show All High Scores</Button>
                {/* <Button onClick={(event) => this.logOut(event)}>Log Out</Button> */}
                {this.state.scores.map( (single, index) => this.showScores(single, index))}
            </div>
        )
    }
}

export default HighScores;
