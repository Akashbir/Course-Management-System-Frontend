import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../services/UserService'
import UserService from "../services/UserService";


class Profile extends Component{

    constructor(props){
        super(props);
        this.userService = new UserService();
        this.state = {
            user:{
                username: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: ""
            }
        }
    }


    componentDidMount() {
        this.userService.profile().
        then(response =>
            this.setState({
                user: {
                    id: response.id,
                    username: response.username,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    phoneNumber: response.phoneNumber,
                    email: response.email
                }
            }))
    }


    firstNameChanged = (event) => {
        this.state.user.firstName = event.target.value;
    };

    lastNameChanged = (event) => {
        this.state.user.lastName = event.target.value;
    };

    emailChanged = (event) => {
        this.state.user.email = event.target.value;
    };
    phoneNumberChanged = (event) => {
        this.state.user.phoneNumber = event.target.value;
    };


    logout = () => {
        this.userService.logout().then(() => {
            this.props.history.push("/")
        })
    }






    render() {
        return (
            <div className="container">
                <h1>Profile</h1>
                <div className="alert alert-success">
                    Profile successfully saved
                </div>
                <form className="border p-5 bg-light my-4">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Alice" readOnly
                                   defaultValue={this.state.user.username}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="firstName"
                                   placeholder="First Name"
                                   defaultValue={this.state.user.firstName}
                                   onChange={this.firstNameChanged}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="lastName"
                                   placeholder="Last Name"
                                   defaultValue={this.state.user.lastName}
                                   onChange={this.lastNameChanged}
                            />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">
                            Phone </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                                   id="phone" placeholder="(555)123-4324"
                                   defaultValue={this.state.user.phoneNumber}
                                   onChange={this.phoneNumberChanged}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control"
                                   id="email" placeholder="alice@wonderland.com"
                                   defaultValue={this.state.user.email}
                                   onChange={this.emailChanged}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="form-control" id="role" value={this.state.user.role}>
                                <option value="faculty">Faculty</option>
                                <option value="student">Student</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dob" className="col-sm-2 col-form-label">
                            Date Of Birth </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control"
                                   id="dob" placeholder="mm/dd/yyyy"/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-success btn-block" id="updateBtn" href="#"
                               onClick={() => this.userService.update(this.state.user.id, this.state.user)}>Update</a>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-danger btn-block" id="logoutBtn" onClick={() => this.logout()}
                            >Logout</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default Profile
