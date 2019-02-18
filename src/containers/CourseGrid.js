import React from 'react'
import CourseCard from '../components/CourseCard'
import {CourseNavbar} from "./CourseNavbar";
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService";

class CourseGrid extends React.Component{


    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: [],
            newCourseName:"",

        }
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(myJson => {
                console.log("courses: "+myJson);
                this.setState({
                    courses: myJson
                })
            });
    }


    addCourse = () => {


        this.courseService.createCourse(this.state.newCourseName).then(
            r => {
                this.courseService.findAllCourses()
                    .then(myJson => {
                        console.log("courses: "+myJson);
                        this.setState({
                            courses: myJson
                        })
                    });
            }
        )
        // .then(myJson =>   this.setState({
        //
        //     courses: [...this.state.courses, myJson]
        // }));


    };

    titleChanged = (event) => {
        this.setState(
            {
                newCourseName: {title: event.target.value}
            });
    };

    deleteCourse = (deleteId) => {
        this.courseService.deleteCourse(deleteId)
            .then(() => {
                this.courseService.findAllCourses().then(
                    (res) => {
                        this.setState({
                            courses: res
                        })
                    }
                )
            })

    }

    render() {
        return (
            <div>
                <CourseNavbar addCourse={this.addCourse} titleChanged={this.titleChanged}/>
                <div className="table-responsive">
                    <table className="table border bg-white responsive">
                        <thead id="courseTableTitle">
                        <tr>
                            <th className="title">Recents</th>
                            <th className="blank"><Link to="/courseList" className="fa fa-list"></Link></th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="card-deck">
                    {
                        this.state.courses.map(course =>
                            <CourseCard
                                addCourse = {this.addCourse}
                                deleteCourse={this.deleteCourse}
                                course={course}
                                key={course.id}/>
                        )
                    }
                </div>
            </div>
        );
    }
}


export default CourseGrid