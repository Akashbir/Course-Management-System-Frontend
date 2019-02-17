import React, {Component} from 'react'
import '../services/UserService'
import UserService from "../services/UserService";

class Register extends Component{

    constructor(props){
        super(props);
        this.userService = new UserService();
        this.state = {
            user: {
                username: "",
                password: "",
                verifyPassword: ""
            }
        }
    }


    userNameChanged = (event) => {
        this.setState({
            user:{
                username: event.target.value,
                password: this.state.user.password,
                verifyPassword: this.state.user.verifyPassword
            }
        })
        // this.state.user.username = event.target.value;
    };

    passwordChanged = (event) => {
        // this.state.user.password = event.target.value;
        this.setState({
            user:{
                username: this.state.user.username,
                password: event.target.value,
                verifyPassword: this.state.user.verifyPassword
            }
        })
    };

    verifyPasswordChanged = (event) => {
        // this.state.user.verifyPassword = event.target.value;
        this.setState({
            user:{
                username: this.state.user.username,
                password: this.state.user.password,
                verifyPassword: event.target.value
            }
        })
    };

    register = () => {
        const newUser = this.state.user;
        if(newUser.username==="" || newUser.password===""||newUser.verifyPassword===""){
            alert('Please fill all the fields');
        }
        else if(newUser.password!==newUser.verifyPassword){
            alert("Passwords do not match")
        }
        else {
            this.userService.register(newUser).then(() => {
                this.props.history.push("/courseList")
            })
        }
    };







    render() {
        return (

            <div className="container">
                <h1>Sign Up</h1>
                <form className="border p-5 bg-light my-4">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   onChange={this.userNameChanged}
                                   id="username"
                                   placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   onChange={this.passwordChanged}
                                   className="form-control wbdv-password-fld"
                                   id="password" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verify-password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   onChange={this.verifyPasswordChanged}
                                   className="form-control wbdv-password-fld"
                                   id="verify-password" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-primary btn-block" onClick={() => this.register()}
                               id="signUpBtn">Sign up</a>
                            <div className="row">
                                <div className="col-6">
                                    <a href="../login/login.template.client.html">Login</a>
                                </div>
                                <div className="col-6">
                                    <a href="../index.html" className="float-right">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



export default Register