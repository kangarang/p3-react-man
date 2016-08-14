import React, { Component } from 'react';
import helpers from '../utils/AuthHelpers';
import { Link } from 'react-router';
import './App.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: ""
    }
  }

  makeUser(event) {
    event.preventDefault();
    console.log("clicked: ", this.state.email, this.state.pw);
    helpers.signUp(this.state.email, this.state.pw);
    console.log("INFO HAS BEEN SENT")
  }

  render() {
    return(
      <div className="SignUpBox">
        <h1>SIGN UP</h1>
        <div>
          <form className="form-inline">
            <div className="form-group">
              <label className="sr-only">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" onChange={(event) => this.setState({email: event.target.value})} />
            </div>
            <div className="form-group">
              <label className="sr-only">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(event) => this.setState({pw: event.target.value})} />
            </div>
            <button type="submit" className="btn btn-default" onClick={(event) => this.makeUser(event)}><Link to="/log-in">Sign up</Link></button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp;
