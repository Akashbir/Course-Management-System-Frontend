import React, {Component} from 'react'
import {CourseNavbar} from "./CourseNavbar";
import {CourseTableBodyLayout} from "./CourseTableBodyLayout";
import CourseCard from "../components/CourseCard";
import CourseService from "../services/CourseService";



 class CourseTable extends Component{

     constructor(props) {
         super(props)
         this.courseService = new CourseService();
         this.state = {
             courses: []
         }
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
             <CourseTableBodyLayout courses={this.props.courses} deleteCourse={this.props.deleteCourse}/>
             </div>
         );
    }
 }

 export default CourseTable