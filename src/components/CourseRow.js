import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
// import 'courselist.style.client.css'

const courseRow = (props) => {
    return(
        <tr>
            <td className="title"><i className="fa fa-file-alt text-primary mr-2"></i><strong><a
                href="#" className="courseName"><Link to={`/courseEditor/${props.course.id}`}>{props.course.title}</Link></a></strong></td>
            <td>me</td>
            <td>01/10/2019</td>
            <td>6:45 PM</td>
            <td>
                {console.log(props)}
                <a onClick={() => props.deleteCourse(props.course.id)} className="remove-course fa fa-times btn btn-outline"></a>
            </td>
            <td>&nbsp;</td>
        </tr>
    )
}
export default courseRow;