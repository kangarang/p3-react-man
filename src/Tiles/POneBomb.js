import '../Styles/Game.css'
import React from 'react';

export default (props) => {
    const styles = {
        bomb: {
            height: "90%",
            width: "55%",
        }

    }
  return <img role="presentation" style={styles.bomb} src="http://i.imgur.com/iYG7YXh.png"></img>
}
