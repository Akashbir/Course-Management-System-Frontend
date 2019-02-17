import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const LessonTabs = ({lessons, selectLesson, deleteLesson, editLesson, placeLessonTitleInput}) =>
    <div className="wbdv-lesson-div">
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li key={lesson.id} className="nav-item">
                        <a className="nav-link active"
                           href="#"> <a onClick={() => selectLesson(lesson)}> {lesson.title} </a>
                            <a onClick={ () => deleteLesson(lesson)}> <i className="fa fa-trash"></i> </a>
                            <a onClick={ () => placeLessonTitleInput(lesson)}> <i className="fa fa-pencil wbdv-module-delete-icon"></i> </a>
                        </a>

                    </li>
                )
            }
        </ul>
    </div>
export default LessonTabs;