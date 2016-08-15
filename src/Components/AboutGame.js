import React, { Component } from 'react';
import NavLink from './NavLink';
import '../Styles/AboutGame.css';
import AtvImg from 'react-atv-img';
import '../Styles/App.css';


class AboutGame extends Component {
  render(){
    return (
      <div className="rootDivStyle">
        <div className="homePage"><h1>Welcome to our game. Please click the above links to navigate about the site!</h1></div>
        <AtvImg

          layers={[
            'http://i.imgur.com/ZBxEnh2.png',
            'http://i.imgur.com/76TpRZY.png',
          ]}
          staticFallback="http://i.imgur.com/5ndOzQw.png"
          style={{ width: 850, height: 760 }}
        />

    </div>
  )
}



  }



export default AboutGame;
