import React, { Component } from 'react';
import '../Styles/App.css';
import help from '../utils/helpers.js'
import {browserHistory} from 'react-router'

class GameOver extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        const savedObj = {
            winner: window.sessionStorage.winner,
            date: window.sessionStorage.date,
            month: window.sessionStorage.month,
            year: window.sessionStorage.year
        }

        const initials = this.state.text

        if (savedObj) {
            savedObj.initials = initials
            help.save(savedObj)
            browserHistory.push('/high-scores')
        }
    }

    whoWon(winner) {
        if (winner === "tie!") {
            return <div>It's a tie!</div>
        } else {
            return <div>{winner} Won!</div>
        }
    }

    render() {
        const winner = window.sessionStorage.winner

        return (
            <div className="GameOver">
                <h1>GAME OVER</h1>
                <h3>{winner ? this.whoWon(winner) : null}</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input onChange={(e) => this.setState({text: e.target.value})} type="text" placeholder="input your initials" maxLength="3"></input>
                    <button>{"Submit to High Scores"}</button>
                </form>
            </div>
        );
    }
}

export default GameOver;
