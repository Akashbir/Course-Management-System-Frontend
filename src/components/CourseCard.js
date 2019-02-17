import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse, title}) =>

    <div className="card"
         styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Card text.</p>
            <Link className="btn btn-primary" to={`/courseEditor/${course.id}`}>Edit</Link>
            <a onClick={() => deleteCourse(course.id)}
               className="btn btn-danger">Delete</a>
        </div></div>
export default CourseCard;