import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, preview, previewWidget, moveUp, moveDown}) =>
    <div>
        {/*widgets!==undefined && */}
        <h1>Widget List</h1>
        <div className="float-right">
            <a className="btn btn-success mr-2" href="#">Save</a>
            <div className="form-check-inline">
                <label className="form-check-label">
                    <strong>Preview</strong> <i className="fa fa-toggle-on" onClick={previewWidget}></i>
                </label>
            </div>
        </div>
        <div className="clearfix"></div>
        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}
                        preview = {preview}
                        moveUp = {moveUp}
                        moveDown={moveDown}

                    />
                )
            }
            <button
                onClick={addWidget}
                className="btn btn-success">
                Add
            </button>
        </div>
    </div>

export default WidgetList