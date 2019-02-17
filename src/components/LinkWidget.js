import React from 'react'


const LinkWidget = ({widget, updateWidget,deleteWidget, preview, moveUp, moveDown}) =>
    <div className="my-4 border p-4">
        <div id="linkw">
            {
                preview !== true &&

                <div id="hidden-content">
                    <h3 className="mb-3 float-sm-left">Link widget</h3>
                    <div className="float-sm-right mb-3">
                        <div className="form-check-inline">
                            <a className="btn btn-warning mr-2" href="#" onClick={() => {moveUp(widget)}}><i className="fa fa-arrow-up"></i></a>
                            <a
                                onClick={() => {moveDown(widget)}}
                            className="btn btn-warning mr-2" href="#"><i className="fa fa-arrow-down"></i></a>
                            <select
                                onChange={(event) => {
                                    widget.type = event.target.value
                                    updateWidget(widget)
                                }}
                                className="form-control"
                                id="selector"
                                value={widget.type}
                                className="form-control" id="selector">
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value="LIST">List</option>
                                <option value="LINK" selected>Link</option>
                                <option value="IMAGE">Image</option>
                            </select>
                            <a className="btn btn-danger ml-2" href="#" onClick={() => deleteWidget(widget)}><i
                                className="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group row">
                        <label className="col-sm-2">Enter Widget Link</label>
                        <div className="col-sm-10">
                            <input
                                value={widget.url}
                                onChange={event => {
                                    widget.url = event.target.value;
                                    updateWidget(widget)
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Link URL"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2">Enter Link Text</label>
                        <div className="col-sm-10">
                            <input
                                value={widget.text}
                                onChange={event => {
                                    widget.text = event.target.value;
                                    updateWidget(widget)
                                }}
                                type="text" className="form-control" placeholder="Link text"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2">Widget Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Enter widget name"/>
                        </div>
                    </div>
                </div>
            }
            <h4 className="mb-3">Preview</h4>
            <a href={widget.url}><p>{widget.text}</p></a>
        </div>

        <br/>
    <hr/>
    </div>


export default LinkWidget



