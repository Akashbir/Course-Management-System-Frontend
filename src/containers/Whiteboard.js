import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Register from '../components/Register'


import CourseEditor from "./CourseEditor";
import {CourseTableBodyLayout} from "./CourseTableBodyLayout";


class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses(),
            courseService: this.courseService
        }
    }

    deleteCoursesWB = (courseId) => {
        const course = this.state.courseService.findCourseById(courseId);
        this.state.courseService.deleteCourse(course);
        this.setState(
            {
                courses: this.state.courseService.findAllCourses()
            }
        )
    };

    createCoursesWB = () => {
        this.state.courseService.addCourse(this.state.courseName);
        this.setState(
            {
                courses: this.state.courseService.findAllCourses()
            }
        )
    };


    render() {
        return (
            <div>
                <Router>
                    <div className="navbar-width">
                        {/*{/<Link to="/">Course Grid</Link> |/}*/}
                        {/*{/<Link to="/table">Course Table</Link>/}*/}
                        <Route path='/grid' exact
                               render={() =>
                                   <CourseGrid
                                       addCourse={this.createCoursesWB}
                                       deleteCourse={this.deleteCoursesWB}
                                       courses={this.state.courses}
                                       titleChanged={this.titleChangedWB}/>}/>
                        <Route path="/courseEditor/:id"
                        exact
                        component={CourseEditor}/>

                        <Route path="/"
                        exact
                        component={Login}/>

                        <Route path="/profile"
                        exact
                        component = {Profile}
                        />

                        <Route path="/register"
                               exact
                               component = {Register}
                        />

                        <Route path='/courseList'
                               exact
                               render={() =>
                                   <CourseTableBodyLayout
                                       // courses={this.state.courses}
                                       addCourse={this.createCoursesWB}
                                       deleteCourse={this.deleteCoursesWB}
                                       titleChanged={this.titleChangedWB}
                                   />}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;