import React from 'react'
import CourseCard from '../components/CourseCard'
import {CourseNavbar} from "./CourseNavbar";
import {Link} from "react-router-dom";
const CourseGrid = ({courses, deleteCourse, addCourse, titleChanged}) =>

    <div>
         <CourseNavbar addCourse={addCourse} titleChanged={titleChanged}/>
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
                courses.map(course =>
                    <CourseCard
                        addCourse = {addCourse}
                        deleteCourse={deleteCourse}
                        course={course}
                        key={course.id}/>
                )
            }
        </div>
    </div>
export default CourseGrid