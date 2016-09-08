import firebase from 'firebase';
import { browserHistory } from 'react-router';

const config = {
    apiKey: "AIzaSyB4JGAFb1Su_crCkaWGIW1_K_u5ICcdQe8",
    authDomain: "react-man.firebaseapp.com",
    databaseURL: "https://react-man.firebaseio.com",
    storageBucket: "",
};

firebase.initializeApp(config);

export default {

    signUp: (email, pass, data) => {
        console.log("signing up...", email, pass);
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
            if (err) {
            console.error(err.code, err.message)
            }
        }).then(res => {
            console.log("helper", res);
            firebase.database().ref("users/" + res.uid).set({
                uid: res.uid,
                displayName: data.userName
            })
            window.localStorage.setItem("uid", res.uid);
            console.info(window.localStorage.getItem("uid"));
            window.localStorage.setItem("displayName", data.userName);
            console.info(window.localStorage.getItem("displayName"));
        })
    },

    logIn: (email, pass) => {
        console.log("loggging in...", email, pass);
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
            // Handle Errors here.
            if (err) {

            console.error(err.code, err.message)
        }
        }).then(res => {
            console.log("logged in...", res);
            window.localStorage.setItem("uid", res.uid);
            console.info(window.localStorage.getItem("uid"));
        })
    },

    checkUser: function(uid) {
        firebase.auth().onAuthStateChanged(function(uid) {
            if (uid) {
                return true
                // User is signed in.
            } else {
                alert("Youre not in!")
                const path = `/log-in`
                return browserHistory.push(path)
                // No user is signed in.
            }
        });
    },

    signOut: function() {
        firebase.auth().signOut().then(function() {
            console.log("logged out?");
            // Sign-out successful.
            }, function(error) {
            // An error happened.
        });
    }
}
