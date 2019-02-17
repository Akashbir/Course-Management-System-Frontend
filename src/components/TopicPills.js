import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const TopicPills = ({topics, deleteTopic, placeTopicTitleInput, updateTopic, selectTopic}) =>
    <ul className="nav nav-pills" id="courseTopics">
        {
            topics.map( topic =>

                <li
                    className="nav-item mt-3"
                    onClick={() => selectTopic(topic)}
                >
                    <a className="nav-link"
                       href="#">{topic.title}
                        <a onClick={ () => deleteTopic(topic)}> <i className="fa fa-trash"></i> </a>
                        <a onClick={ () => placeTopicTitleInput(topic)}> <i className="fa fa-pencil wbdv-module-delete-icon"></i> </a>

                    </a></li>
            )
        }
    </ul>
export default TopicPills;