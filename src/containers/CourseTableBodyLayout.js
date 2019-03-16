import React, {Component} from 'react'
import CourseService from "../services/CourseService"
import ModuleListItem from "../components/ModuleListItem";
import CourseRow from "../components/CourseRow";
import  {Link} from 'react-router-dom'
import UserService from "../services/UserService";
import {CourseNavbar} from "./CourseNavbar";

export class CourseTableBodyLayout extends Component{

    // constructor(props) {
    //     super(props);
    //     // const obj = new CourseService();
    //     // const data = obj.findAllCourses();
    //     // this.state = {
    //     //     courses: data
    //
    //     this.userService = new UserService();
    //     this.courseService = new CourseService();
    //     this.state = {courses: [],
    //         user:{
    //             id: ""
    //         }
    //     };
    //
    //
    //     }

    // componentDidMount() {
    //     this.userService.profile().then(
    //         response => {
    //             this.setState(
    //                 {
    //                     user: {
    //                         id: response.id
    //                     }
    //                 }, () => {
    //                     this.courseService.findAllCourses().then(
    //                         response => {
    //                             this.setState(
    //                                 {
    //                                     courses: response.filter(course => course.facultyId!==this.state.user.id)
    //                                 }
    //                             )
    //                         }
    //                     )
    //                 }
    //             );
    //         }
    //     );
    // }

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.userService = new UserService();
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

        // this.userService.profile().then(res => {
        //     console.log("logged in response", res.id);
        //     this.courseService.findAllCourses(userId).then(res => {
        //         this.setState({
        //             courses: res,
        //             user: {
        //                 id: res.id
        //             }
        //         })
        //     })
        // })
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
                <div>
                    <div className="container-fluid">
                        <div className="table-responsive">
                            <table className="table border bg-white responsive">
                                <thead id="courseTableTitle">
                                <tr>
                                    <th className="title">Title</th>
                                    <th>Owned by</th>
                                    <th>Date</th>
                                    <th>Last modified</th>
                                    <th className="blank"><Link to="/grid" className="fa fa-th"></Link></th>
                                    <th className="blank"><a href="#" id="sort-ascending"><i className="fa fa-sort-alpha-down"></i></a></th>
                                </tr>
                                </thead>
                                <tbody>

                                    {
                                        this.state.courses.map(
                                            (course) => {
                                                return (
                                                    <CourseRow course={course} key={course.id} deleteCourse={this.deleteCourse}/>
                                                )
                                            }
                                        )

                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                    <a href="#">
            <span className="fa-stack wd-bottom-right">
				<i className="fa fa-circle fa-stack-2x"></i>
				<i className="fa fa-plus fa-stack-1x fa-inverse"></i>
            </span>
                    </a>

                </div>
            </div>
        );
    }
}