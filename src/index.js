import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './Components/App';
import AboutMakers from './Components/AboutMakers';
import AboutGame from './Components/AboutGame';
import ReactMan from './Components/ReactMan';
import HighScores from './Components/HighScores';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Game from './Components/Game';
import GameOver from './Components/GameOver';
import './Styles/index.css';

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={App}>

            <IndexRoute component={AboutGame} />
            <Route path="/about_makers" component={AboutMakers} />

            <Route path="/react-man" component={ReactMan}>
                <Route path="/react-man/high_scores" component={HighScores} />
                <Route path="/react-man/game" component={Game} />
                <Route path="/react-man/game-over" component={GameOver} />
            </Route>

        </Route>
    </Router>,
    document.getElementById('root')
)
