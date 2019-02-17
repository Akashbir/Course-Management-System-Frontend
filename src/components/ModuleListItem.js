import React from 'react'
import '../containers/courseEditor.style.client.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const ModuleListItem = ({module, selectModule, deleteModule, updateModule, placeModuleTitleInput}) =>
    <li onClick={() => selectModule(module)} className="list-group-item" id="moduleName">
        {module.title}
        <i className="fa fa-times removeCourse" onClick={() => deleteModule(module)}></i>
        <i className="fa fa-edit removeCourse" onClick={() => placeModuleTitleInput(module)}></i>
    </li>

export default ModuleListItem;