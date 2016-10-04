import React, { Component } from 'react';
import help from '../utils/helpers.js'
import { Button } from 'react-bootstrap';

import '../Styles/HighScores.css';

class HighScores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scores: []
        }
    }

    componentDidMount() {
        this.show()
    }

    show() {
        // e.preventDefault()
        help.showAll().then( res => {
            return res.json()
        }).then( json => {
            let arr = []
            if (json) {
                Object.keys(json).map( single => {
                    let newObje = {}
                    newObje.initials = json[single].initials
                    const date = json[single].date
                    const year = json[single].year
                    const month = parseInt(json[single].month, 10) + 1
                    newObje.identity = single
                    newObje.when = month + "/" + date + "/" + year
                    return arr.push(newObje)
                })
            }
            this.setState({
                scores: arr
            })
        })
    }

    deleteScore(e) {
        e.preventDefault()
        let ident = e.target.value
        help.delete(ident).then(res => {
            console.log(res);
            this.show()
        })
    }

    showScores(score, index) {
        return (
            <div key={index} className="score">
                {score.initials}{"  on  "}{score.when}
                {" "}
                <Button className="deleter" onClick={(event) => this.deleteScore(event)} value={score.identity}>DELETE</Button>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <h2 className="top">High Scores</h2>
                <div className="HighScores">
                    <div className="butt">
                        {/* <Button onClick={(e) => this.show(e)}>Show Scores</Button> */}
                    </div>
                    {this.state.scores.map( (single, index) => this.showScores(single, index))}
                </div>
            </div>
        )
    }
}

export default HighScores;
