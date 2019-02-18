import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = (props) =>

    <div className="card"
         styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{props.course.title}</h5>
            <p className="card-text">Course Description</p>
            <Link className="btn btn-primary" to={`/courseEditor/${props.course.id}`}>Edit</Link>
            <a onClick={() => props.deleteCourse(props.course.id)}
               className="btn btn-danger">Delete</a>
        </div></div>
export default CourseCard;