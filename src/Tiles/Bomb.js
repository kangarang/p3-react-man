import '../Styles/Game.css'
import React from 'react';

export default (props) => {
    const styles = {
        bomb: {
            height: "90%",
            width: "55%",
        },

    }
    return <img style={styles.bomb} role="presentation" src="http://i.imgur.com/iYG7YXh.png"></img>
}
