import React, {Component} from 'react'
import  {Link} from 'react-router-dom'

export class CourseNavbar extends Component{

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div id="navbarSupportedContent">
                        <a className="navbar-brand" href="#"><i className="fa fa-bars"></i></a>
                        <a className="navbar-brand" href="#" id="courseManagerLink">Course List</a>
                    </div>
                    <form className="form-inline my-2 my-lg-0 mx-auto w-50">
                        <input className="form-control mr-sm-2 w-75"
                               type="search" placeholder="New course title"
                               aria-label="Search"
                               onChange={this.props.titleChanged}
                        />
                        <a href="#" id="add-course" onClick={() => this.props.addCourse()}>
			<span className="fa-stack">
				<i className="fa fa-circle fa-stack-2x" id="addCircleBtn"></i>
				<i className="fa fa-plus fa-stack-1x fa-inverse"></i>
            </span>
                        </a>
                    </form>
                    <div className="float-right"><Link to="/profile" style={{color: 'white'}}>Profile</Link></div>
                </nav>
            </div>
        );
    }

}