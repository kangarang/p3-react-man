import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import update from 'react-addons-update'
import { browserHistory } from 'react-router';

import createTiles from '../utils/CreateTiles.js';
import movement from '../utils/Movement.js';

import TileContainer from './TileContainer.js';

import '../Styles/Game.css';


class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tiles: [],
            winner: "false"
        }
        this.bomb = this.bomb.bind(this)
        this.eachFire = this.eachFire.bind(this)
        this.checkWin = this.checkWin.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    };


    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown, false)
        this.setState({
            tiles: createTiles()
        });

        // check for fire and win
        this.winTimer = setInterval(this.checkWin, 1000)

    }; //Adds event listener and setsState of gameboard


    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown, false)
        clearInterval(this.winTimer)
    };



    bomb(bombIndex) {
        const App = this
        setTimeout(function() {
            App.explosion(bombIndex)
        }, 3000)
    }; //Start bomb/explosion timer



    checkWin() {
        const tiles = this.state.tiles;
        const playerOne = tiles.filter(tile => tile.playerOne === true);
        const playerTwo = tiles.filter(tile => tile.playerTwo === true);

        if (playerOne.length && playerTwo.length) {
            return
        } else if (playerOne.length) {
            this.setState({
                winner: "Player 1"
            })
        } else if (playerTwo.length) {
            this.setState({
                winner: "Player 2"
            })
        } else {
            this.setState({
                winner: "tie!"
            })
        }

        if (this.state.winner !== "false") {
            const date = new Date()
            window.sessionStorage.setItem('winner', this.state.winner)
            window.sessionStorage.setItem('date', date.getDate())
            window.sessionStorage.setItem('month', date.getMonth())
            window.sessionStorage.setItem('year', date.getFullYear())
            ReactDOM.unmountComponentAtNode(document.getElementById('gameMount'))
            browserHistory.push('/game-over')
        }
    };



    clearFire(tile) {
        const tiles = this.state.tiles;
        const atTile = tiles.indexOf(tile);
        this.setState({
            tiles: update(this.state.tiles, {
                [atTile]: {
                    fire: {$set: false},
                    playerOne: {$set: false},
                    playerTwo: {$set: false}
                }
            })
        });
    }; //Clear fire, destroy player if inside fire



    eachFire() {
        clearInterval(this.fireTimer)
        const fireTiles = this.state.tiles.filter(tile => tile.fire === true);
        const App = this
        fireTiles.map(function(tile, t){
            return App.clearFire(tile);
        })
    }; //For each fire run clearFire with current tile info



    explosion(bombIndex) {

        this.fireTimer = setInterval(this.eachFire, 500)

        const boom = new Audio("https://audiosoundclips.com/wp-content/uploads/2015/01/8-Bit-SFX_Explosion_02.mp3");
        //Provided by Jesus Lastra via audiosoundclips.com under the CC license
        const tiles = this.state.tiles;
        const showMe = this.fourWay(tiles[bombIndex]);

        this.setState({
            tiles: update(this.state.tiles, {
                [bombIndex]: {
                    bomb: {$set: false},
                    playerOne: {$set: false},
                    fire: {$set: true},
                    playerTwo: {$set: false}
                }
            })
        });

        for (let i = 0; i < showMe.length; i++) {
            let checkExp = showMe[i]
            let willExplode = tiles.filter(tile => tile.x === checkExp[0].x && tile.y === checkExp[0].y && tile.cement === false);
            let willExplodeTwo = tiles.filter(tile => tile.x === checkExp[1].x && tile.y === checkExp[1].y && tile.cement === false);
            if (willExplode[0]) {
                const toExplode = tiles.indexOf(willExplode[0])
                const twoExplode = tiles.indexOf(willExplodeTwo[0])
                this.setState({
                    tiles: update(this.state.tiles, {
                        [toExplode]: {
                            fire: {$set: true},
                            crate: {$set: false},
                            playerOne: {$set: false},
                            playerTwo: {$set: false}
                        }
                    })
                })
                if (willExplodeTwo[0] && tiles[toExplode].crate === false) {
                    this.setState({
                        tiles: update(this.state.tiles, {
                            [twoExplode]: {
                                fire: {$set: true},
                                crate: {$set: false},
                                playerOne: {$set: false},
                                playerTwo: {$set: false}
                            }
                        })
                    })
                }; //End block radius 2
            } //End block radius 1
            } //End loop
        boom.play();
    }; //End Explosion



    fourWay(bCoords) {
        const exCoords = []
        exCoords.push([{x: bCoords.x + 1, y: bCoords.y},{x: bCoords.x + 2, y: bCoords.y}])
        exCoords.push([{x: bCoords.x - 1, y: bCoords.y},{x: bCoords.x - 2, y: bCoords.y}])
        exCoords.push([{x: bCoords.x, y: bCoords.y + 1},{x: bCoords.x, y: bCoords.y + 2}])
        exCoords.push([{x: bCoords.x, y: bCoords.y - 1},{x: bCoords.x, y: bCoords.y - 2}])
        return exCoords;
    }; //Get explosion "radius"



    handleKeyDown(event) {
        if (event.code === "KeyW" || event.code === "KeyE" || event.code === "KeyA" || event.code === "KeyD" || event.code === "KeyS") {
            let position = this.state.tiles.filter(tile => tile.playerTwo === true);
            let newPosition = movement(event, position[0]);
            let atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1] && tile.cement === false && tile.crate === false && tile.bomb === false && tile.playerOne === false)
            if (atPosition.length) {
                const old = this.state.tiles.indexOf(position[0]);
                const newer = this.state.tiles.indexOf(atPosition[0]);
                this.setState({
                    tiles: update(this.state.tiles, {
                        [old]: {
                            playerTwo: {$set: false}
                        }
                    })
                })
                this.setState({
                    tiles: update(this.state.tiles, {
                        [newer]: {
                            playerTwo: {$set: true}
                        }
                    })
                })
            } else if (newPosition === "bomb") {
                console.log("plant bomb");
                const i = this.state.tiles.indexOf(position[0]);
                this.setState({
                    tiles: update(this.state.tiles, {
                        [i]: {
                            bomb: {$set: true}
                        }
                    })
                })
                if (this.state.tiles[i].bomb === true) {
                    return this.bomb(i);
                }
            } //end first if with playerTwo movement
        } else if (event.code === "ArrowUp" || event.code === "Space"|| event.code === "ArrowDown" || event.code === "ArrowRight" || event.code === "ArrowLeft"){
            let position = this.state.tiles.filter(tile => tile.playerOne === true);
            let newPosition = movement(event, position[0]);
            let atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1] && tile.cement === false && tile.crate === false && tile.bomb === false && tile.playerTwo === false)
            if (atPosition.length) {
                const old = this.state.tiles.indexOf(position[0]);
                const newer = this.state.tiles.indexOf(atPosition[0]);
                this.setState({
                    tiles: update(this.state.tiles, {
                        [old]: {
                            playerOne: {$set: false}
                        }
                    })
                })
                this.setState({
                    tiles: update(this.state.tiles, {
                        [newer]: {
                            playerOne: {$set: true}
                        }
                    })
                })
            } else if (newPosition === "bomb") {
                console.log("plant bomb");
                const i = this.state.tiles.indexOf(position[0]);
                this.setState({
                    tiles: update(this.state.tiles, {
                        [i]: {
                            bomb: {$set: true}
                        }
                    })
                })
                if (this.state.tiles[i].bomb === true) {
                    return this.bomb(i);
                };
            }
        } else return
    }; //end movement playerOne movement



    render() {
        return(
            <div>
                <div className="displayUser">
                    <h4>Welcome to REACT MAN!</h4>
                    <h6>Player 1 controls: left-right-up-down  bomb: space</h6>
                    <h6>Player 2 controls: w-a-s-d  bomb: e</h6>
                </div>
                <div className="game">
                    <div className="opacity"></div>
                    <div className="wrapMe">
                        <div className="content">
                            <TileContainer tiles={this.state.tiles} />

                        </div>

                    </div>
                </div>
            </div>
        )
    }; //Container worried about one state that changes based on user input.


}

class Wrapper extends Component {

    componentDidMount() {
        ReactDOM.render(<Game />, document.getElementById('gameMount'))
    }

    render() {
        return (
            <div id="gameMount"></div>
        )
    }
}

export default Wrapper;
