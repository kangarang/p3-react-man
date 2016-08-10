import React, { Component } from 'react';
import './App.css';
import ZeroZero from './ZeroZero'
// import oneZero from './oneZero'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // earth, bomberman, bomb, drop, carry, fire, crate, wall
      zeroEight: "earth",
      oneEight: "earth",
      twoEight: "earth",
      threeEight: "earth",
      fourEight: "earth",
      fiveEight: "earth",
      sixEight: "earth",
      sevenEight: "earth",
      eightEight: "earth",

      zeroSeven: "earth",
      oneSeven: "wall",
      twoSeven: "earth",
      threeSeven: "wall",
      fourSeven: "earth",
      fiveSeven: "wall",
      sixSeven: "earth",
      sevenSeven: "wall",
      eightSeven: "earth",

      zeroSix: "earth",
      oneSix: "earth",
      twoSix: "earth",
      threeSix: "earth",
      fourSix: "earth",
      fiveSix: "earth",
      sixSix: "earth",
      sevenSix: "earth",
      eightSix: "earth",

      zeroFive: "earth",
      oneFive: "wall",
      twoFive: "earth",
      threeFive: "wall",
      fourFive: "earth",
      fiveFive: "wall",
      sixFive: "earth",
      sevenFive: "wall",
      eightFive: "earth",

      zeroFour: "earth",
      oneFour: "earth",
      twoFour: "earth",
      threeFour: "earth",
      fourFour: "earth",
      fiveFour: "earth",
      sixFour: "earth",
      sevenFour: "earth",
      eightFour: "earth",

      zeroThree: "earth",
      oneThree: "wall",
      twoThree: "earth",
      threeThree: "wall",
      fourThree: "earth",
      fiveThree: "wall",
      sixThree: "earth",
      sevenThree: "wall",
      eightThree: "earth",

      zeroTwo: "earth",
      oneTwo: "earth",
      twoTwo: "earth",
      threeTwo: "earth",
      fourTwo: "earth",
      fiveTwo: "earth",
      sixTwo: "earth",
      sevenTwo: "earth",
      eightTwo: "earth",

      zeroOne: "earth",
      oneOne: "wall",
      twoOne: "earth",
      threeOne: "wall",
      fourOne: "earth",
      fiveOne: "wall",
      sixOne: "earth",
      sevenOne: "wall",
      eightOne: "earth",

      zeroZero: "bomberman",
      oneZero: "earth",
      twoZero: "earth",
      threeZero: "earth",
      fourZero: "earth",
      fiveZero: "earth",
      sixZero: "earth",
      sevenZero: "earth",
      eightZero: "earth"
    }
  }

  // let bX = 0
  // let bY = 0
  // bomberman = (bX, bY)


  // function move(bX, bY, ) {
  //   this.setState({
  //     visual: bomberman
  //   })
  // }

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    e.preventDefault()
    let arr = []
    let prePos
    let postPos
    let obj = {}
    let oldMan
    // push objects
    const coords = [
      {x: 0, y: 8}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8}, {x: 7, y: 8}, {x: 8, y: 8}, {x: 0, y: 7}, {x: 1, y: 7}, {x: 2, y: 7}, {x: 3, y: 7}, {x: 4, y: 7}, {x: 5, y: 7}, {x: 6, y: 7}, {x: 7, y: 7}, {x: 8, y: 7}, {x: 0, y: 6}, {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6}, {x: 7, y: 6}, {x: 8, y: 6}, {x: 0, y: 5}, {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 8, y: 5}, {x: 0, y: 4}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4}, {x: 8, y: 4}, {x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3}, {x: 8, y: 3}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 5, y: 2}, {x: 6, y: 2}, {x: 7, y: 2}, {x: 8, y: 2}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}]

    const wordArray = [
      'zeroEight', 'oneEight', 'twoEight', 'threeEight', 'fourEight', 'fiveEight', 'sixEight', 'sevenEight', 'eightEight',
      'zeroSeven', 'oneSeven', 'twoSeven', 'threeSeven', 'fourSeven', 'fiveSeven', 'sixSeven', 'sevenSeven', 'eightSeven',
      'zeroSix', 'oneSix', 'twoSix', 'threeSix', 'fourSix', 'fiveSix', 'sixSix', 'sevenSix', 'eightSix',
      'zeroFive', 'oneFive', 'twoFive', 'threeFive', 'fourFive', 'fiveFive', 'sixFive', 'sevenFive', 'eightFive',
      'zeroFour', 'oneFour', 'twoFour', 'threeFour', 'fourFour', 'fiveFour', 'sixFour', 'sevenFour', 'eightFour',
      'zeroThree', 'oneThree', 'twoThree', 'threeThree', 'fourThree', 'fiveThree', 'sixThree', 'sevenThree', 'eightThree',
      'zeroTwo', 'oneTwo', 'twoTwo', 'threeTwo', 'fourTwo', 'fiveTwo', 'sixTwo', 'sevenTwo', 'eightTwo',
      'zeroOne', 'oneOne', 'twoOne', 'threeOne', 'fourOne', 'fiveOne', 'sixOne', 'sevenOne', 'eightOne',
      'zeroZero', 'oneZero', 'twoZero', 'threeZero', 'fourZero', 'fiveZero', 'sixZero', 'sevenZero', 'eightZero'
    ]

    let stateObj = this.state

    for (let key in stateObj) {
      if (stateObj.hasOwnProperty(key)) {
        arr.push(stateObj[key])
      }
    }
    oldMan = arr.indexOf("bomberman");

    let oldManObj = coords[oldMan]

    let newManObj = {x: oldManObj.x, y: oldManObj.y}
    let indexOfNewMan

    if (e.keyCode === 37) {
      newManObj.x --
    } else if (e.keyCode === 38) {
      newManObj.y ++
    } else if (e.keyCode === 39) {
      newManObj.x ++
    } else if (e.keyCode === 40) {
      newManObj.y --
    } else {
      return
    }

    if (newManObj.x % 2 !== 0 && newManObj.y % 2 !== 0) {
      return
    } else if (newManObj.x < 0 || newManObj.y > 8 || newManObj.x > 8 || newManObj.y < 0) {
      return
    }

    for (let i = 0; i < coords.length; i ++) {
      if (coords[i].x === newManObj.x && coords[i].y === newManObj.y) {
        indexOfNewMan = i
      }
    }

    prePos = wordArray[oldMan]
    postPos = wordArray[indexOfNewMan]

    let firstElement = "earth"
    let secondElement = "bomberman"

    obj[prePos] = firstElement
    obj[postPos] = secondElement
    this.setState(obj)
  }

  render() {
    return (
      <div className="App">

        <ZeroZero visual={this.state.zeroEight}/>
        <ZeroZero visual={this.state.oneEight}/>
        <ZeroZero visual={this.state.twoEight}/>
        <ZeroZero visual={this.state.threeEight}/>
        <ZeroZero visual={this.state.fourEight}/>
        <ZeroZero visual={this.state.fiveEight}/>
        <ZeroZero visual={this.state.sixEight}/>
        <ZeroZero visual={this.state.sevenEight}/>
        <ZeroZero visual={this.state.eightEight}/>


        <ZeroZero visual={this.state.zeroSeven}/>
        <ZeroZero visual={this.state.oneSeven}/>
        <ZeroZero visual={this.state.twoSeven}/>
        <ZeroZero visual={this.state.threeSeven}/>
        <ZeroZero visual={this.state.fourSeven}/>
        <ZeroZero visual={this.state.fiveSeven}/>
        <ZeroZero visual={this.state.sixSeven}/>
        <ZeroZero visual={this.state.sevenSeven}/>
        <ZeroZero visual={this.state.eightSeven}/>


        <ZeroZero visual={this.state.zeroSix}/>
        <ZeroZero visual={this.state.oneSix}/>
        <ZeroZero visual={this.state.twoSix}/>
        <ZeroZero visual={this.state.threeSix}/>
        <ZeroZero visual={this.state.fourSix}/>
        <ZeroZero visual={this.state.fiveSix}/>
        <ZeroZero visual={this.state.sixSix}/>
        <ZeroZero visual={this.state.sevenSix}/>
        <ZeroZero visual={this.state.eightSix}/>


        <ZeroZero visual={this.state.zeroFive}/>
        <ZeroZero visual={this.state.oneFive}/>
        <ZeroZero visual={this.state.twoFive}/>
        <ZeroZero visual={this.state.threeFive}/>
        <ZeroZero visual={this.state.fourFive}/>
        <ZeroZero visual={this.state.fiveFive}/>
        <ZeroZero visual={this.state.sixFive}/>
        <ZeroZero visual={this.state.sevenFive}/>
        <ZeroZero visual={this.state.eightFive}/>


        <ZeroZero visual={this.state.zeroFour}/>
        <ZeroZero visual={this.state.oneFour}/>
        <ZeroZero visual={this.state.twoFour}/>
        <ZeroZero visual={this.state.threeFour}/>
        <ZeroZero visual={this.state.fourFour}/>
        <ZeroZero visual={this.state.fiveFour}/>
        <ZeroZero visual={this.state.sixFour}/>
        <ZeroZero visual={this.state.sevenFour}/>
        <ZeroZero visual={this.state.eightFour}/>


        <ZeroZero visual={this.state.zeroThree}/>
        <ZeroZero visual={this.state.oneThree}/>
        <ZeroZero visual={this.state.twoThree}/>
        <ZeroZero visual={this.state.threeThree}/>
        <ZeroZero visual={this.state.fourThree}/>
        <ZeroZero visual={this.state.fiveThree}/>
        <ZeroZero visual={this.state.sixThree}/>
        <ZeroZero visual={this.state.sevenThree}/>
        <ZeroZero visual={this.state.eightThree}/>


        <ZeroZero visual={this.state.zeroTwo}/>
        <ZeroZero visual={this.state.oneTwo}/>
        <ZeroZero visual={this.state.twoTwo}/>
        <ZeroZero visual={this.state.threeTwo}/>
        <ZeroZero visual={this.state.fourTwo}/>
        <ZeroZero visual={this.state.fiveTwo}/>
        <ZeroZero visual={this.state.sixTwo}/>
        <ZeroZero visual={this.state.sevenTwo}/>
        <ZeroZero visual={this.state.eightTwo}/>


        <ZeroZero visual={this.state.zeroOne}/>
        <ZeroZero visual={this.state.oneOne}/>
        <ZeroZero visual={this.state.twoOne}/>
        <ZeroZero visual={this.state.threeOne}/>
        <ZeroZero visual={this.state.fourOne}/>
        <ZeroZero visual={this.state.fiveOne}/>
        <ZeroZero visual={this.state.sixOne}/>
        <ZeroZero visual={this.state.sevenOne}/>
        <ZeroZero visual={this.state.eightOne}/>


        <ZeroZero visual={this.state.zeroZero}/>
        <ZeroZero visual={this.state.oneZero}/>
        <ZeroZero visual={this.state.twoZero}/>
        <ZeroZero visual={this.state.threeZero}/>
        <ZeroZero visual={this.state.fourZero}/>
        <ZeroZero visual={this.state.fiveZero}/>
        <ZeroZero visual={this.state.sixZero}/>
        <ZeroZero visual={this.state.sevenZero}/>
        <ZeroZero visual={this.state.eightZero}/>
      </div>
    );
  }
}

export default App;
