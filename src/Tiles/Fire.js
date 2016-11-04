import '../Styles/Game.css'
import React from 'react';

export default (props) => {
    const styles = {
        fire: {
            height: "90%",
            width: "90%",
        },

    }
    return <img style={styles.fire} role="presentation" src="http://i.imgur.com/NbGSJGe.png"></img>
}
