import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Whiteboard from './containers/Whiteboard'
import '../node_modules/font-awesome/css/font-awesome.css'
import {CourseTable} from "./containers/CourseTable"
import './containers/courselist.style.client.css'
import {CourseNavbar} from "./containers/CourseNavbar";
import {CourseTableBodyLayout} from "./containers/CourseTableBodyLayout";
import widgetReducer from './reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


ReactDOM.render(
    <div>
    <Whiteboard/>
    </div>,
    document.getElementById("root")
);