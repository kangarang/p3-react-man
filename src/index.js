import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './Containers/App';
import ReactMan from './Containers/ReactMan';
import Game from './Containers/Game';
import AboutMakers from './Components/AboutMakers';
import AboutGame from './Components/AboutGame';
import HighScores from './Components/HighScores';
import GameOver from './Components/GameOver';
import './Styles/index.css';

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={App}>

            <IndexRoute component={AboutGame} />
            <Route path="/about-makers" component={AboutMakers} />

            <Route path="/react-man" component={ReactMan}>
                <Route path="/high-scores" component={HighScores} />
                <Route path="/game" component={Game} />
                {/* change this to index route and change all pushes to /react-man */}
                <Route path="/game-over" component={GameOver} />
            </Route>

        </Route>
    </Router>,
    document.getElementById('root')
)
