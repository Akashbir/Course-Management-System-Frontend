import React, {Component} from 'react'
import {CourseNavbar} from "./CourseNavbar";
import {CourseTableBodyLayout} from "./CourseTableBodyLayout";
import CourseCard from "../components/CourseCard";



 class CourseTable extends Component{

     constructor(props) {
         super(props)
     }

     // componentDidMount = () =>
     //     this.findAllCourses();
     // findAllCourses = () =>
     //     this.courseService.findAllCourses()
     //         .then(courses =>
     //             this.setState
     //             ({courses: courses}));

     render() {
         return (
             <div>
                 {console.log(this.props)}
             <CourseNavbar addCourse={this.props.addCourse} titleChanged={this.props.titleChanged}/>
             <CourseTableBodyLayout courses={this.props.courses} deleteCourse={this.props.deleteCourse}/>
             </div>
         );
    }
 }

 export default CourseTable