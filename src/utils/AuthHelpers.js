import firebaseapp from 'firebase';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

var config = {
    apiKey: "AIzaSyDGJmgqfJI5V6cnGw0L5AuqinK3noWLXd0",
    authDomain: "bomberman-react.firebaseapp.com",
    databaseURL: "https://bomberman-react.firebaseio.com",
    storageBucket: "bomberman-react.appspot.com",
  };


firebaseapp.initializeApp(config)

const firebaseUtils = {
  signUp: (email, pass) => {
    console.log("signing up...", email, pass);
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
      if (err) {
        console.error(err.code, err.message)
      }
    }).then(res => {
      console.log("helper",res);
      firebase.database().ref("users/"+res.uid).set({
        uid: res.uid,
      })
      window.localStorage.setItem("uid", res.uid);
      console.info(window.localStorage.getItem("uid"));
      }
    )
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
      }
    )
  },

  checkUser: function (uid) {
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
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });
  }
}



export default firebaseUtils;
