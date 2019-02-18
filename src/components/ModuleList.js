import React from 'react'
import ModuleListItem from "./ModuleListItem";
import '../containers/courseEditor.style.client.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";

class ModuleList extends React.Component {


    constructor(props) {
        super(props)
        this.courService = new CourseService();
        this.moduleService = new ModuleService();
        this.state = {
            courses: [],

        }

    }

    render() {
        return(
            <ul className="nav flex-column nav-pills mt-4">
                <li className="list-group-item">
                    <input
                        onChange={this.props.titleChangedModule}
                        className="form-control"
                        defaultValue={this.props.placeModuleTitleInput.title}
                        id="module-input"
                    />
                    <button
                        onClick={this.props.createModule}
                        className="btn btn-primary">Add Module
                    </button>
                    <button type="button"

                            onClick={()=>{this.props.updateModule()}}
                            className="btn btn-outline module-update">
                        <i
                        className="fa fa-check"></i></button>{console.log(this.props.modules)}

                </li>
                {

                    this.props.modules.map(
                        (module) => {
                            console.log("=====> ",module);
                            return (
                                <ModuleListItem
                                    key={module.id}
                                    module={module}
                                    deleteModule={this.props.deleteModule}
                                    selectModule={this.props.selectModule}
                                    updateModule = {this.props.updateModule}
                                    placeModuleTitleInput = {this.props.placeModuleTitleInput}
                                />
                            )
                        }
                    )
                }
            </ul>
        )
    }
}
export default ModuleList;