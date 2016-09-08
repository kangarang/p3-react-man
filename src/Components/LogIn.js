import React, { Component } from 'react';
import helpers from '../utils/AuthHelpers';
import NavLink from './NavLink';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            pw : "",
            displayName: window.localStorage.getItem("displayName"),
            userId: window.localStorage.getItem("uid")
        }
    }

    signIn(e){
        e.preventDefault();
        helpers.logIn(this.state.email,this.state.pw)
    }

    render() {
        console.log("displayName", this.state.displayName);
        return (
            <div className="SignInBox">
                <h1>Let's Log In!</h1>
                <form className="form-inline">
                    <div className="form-group">
                        <label className="sr-only">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(e) => this.setState({pw: e.target.value})} />
                    </div>
                    <NavLink to="/bomberman/game"><button type="submit" className="btn btn-default" onClick={(e) => this.signIn(e)}>Let's do this!</button></NavLink>
                </form>
            </div>
        )
    }
}

export default LogIn;
