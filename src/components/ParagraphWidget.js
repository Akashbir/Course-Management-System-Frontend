import React from "react";

const ParagraphWidget = ({widget,updateWidget,deleteWidget,preview, moveUp, moveDown}) =>
    <div>
        <div className="my-4 border p-4">
        <div id="paragraphw">
            {
                preview !== true &&

                <div id="hidden-content">
                    <h3 className="mb-3 float-sm-left">Paragraph widget</h3>
                    <div className="float-sm-right mb-3">
                        <div className="form-check-inline">
                            <a className="btn btn-warning mr-2" href="#" onClick={() => {moveUp(widget)}}><i className="fa fa-arrow-up"></i></a>
                            <a
                                className="btn btn-warning mr-2"
                                href="#"
                                onClick={() => {moveDown(widget)}}
                                >
                                <i className="fa fa-arrow-down"></i></a>
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
                                <option value="PARAGRAPH" selected>Paragraph</option>
                                <option value="LIST">List</option>
                                <option value="LINK">Link</option>
                                <option value="IMAGE">Image</option>
                            </select>
                            <a className="btn btn-danger ml-2" href="#" onClick={() => deleteWidget(widget)}><i
                                className="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group row">
                        <label className="col-sm-2">Write Paragraph</label>
                        <div className="col-sm-10">
                    <textarea
                        onChange={event => {
                            widget.text = event.target.value;
                            updateWidget(widget)
                        }}
                        className="form-control"
                        rows="3"
                        id="comment">Lorem ipsum</textarea>
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
            <p>{widget.text}</p>
        </div>

        <br/>
        <hr/>
        <br/>
        </div>
    </div>

export default ParagraphWidget



