import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './login.style.client.css'
import '../services/UserService'
import UserService from "../services/UserService";
import  {Link} from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super(props);
        this.userService = new UserService();
        
        this.state = {
            user:{
                username: "",
                password: ""
            }

        }
        
    }

        usernameChanged = (event) => {
        this.setState(
            {
                user: {
                    username: event.target.value,
                    password: this.state.user.password
                }
            });
    };

    passwordChanged = (event) => {
        this.setState (
            {
                user: {
                    username: this.state.user.username,
                    password: event.target.value
                }
            }
        )
    };

    login = () => {
        const newUser = this.state.user;
        if(newUser.password!==this.state.user.password || newUser.username!==this.state.user.username){
            alert('Invalid credentials');
        }
        else if(newUser.password==="" || newUser.username===""){
            alert('Username or password field empty');
        }
        
        else {
            this.userService.login(newUser).then(() => {
                this.props.history.push("/courseList")
            })
        }
    };







    render() {
        
        return (

            <div className="container">
            <h1>Sign In</h1>
        <form className="border p-5 bg-light my-4">
            <div className="form-group row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
            Username </label>
            <div className="col-sm-10">
            <input className="form-control"
        onChange= {this.usernameChanged}
        id="username"
        placeholder="Alice"/>
            </div>
            </div>
            <div className="form-group row">
            <label for="password" className="col-sm-2 col-form-label">
            Password </label>
            <div className="col-sm-10">
            <input type="password"
                   onChange={this.passwordChanged}
                   className="form-control wbdv-password-fld"
        id="password" placeholder="123qwe#$%"/>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
            <a className="btn btn-primary btn-block" id="signInBtn" onClick={() => this.login()}>Sign in</a>
            <div className="row">
            <div className="col-6">
            <a href="#">Forgot Password?</a>
        </div>
        <div className="col-6">
            <Link to ="/register" className="float-right">Sign up</Link>
        </div>
        </div>
        </div>
        </div>
        </form>
        </div>

    );
    }


}


export default Login
