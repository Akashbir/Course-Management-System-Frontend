import React from 'react';



const ListWidget = ({widget, updateWidget, deleteWidget, preview, moveUp, moveDown}) =>
    <div className="my-4 border p-4">
    <div id="listw">
        {
            preview !== true &&

            <div id="hidden-content">
                <h3 className="mb-3 float-sm-left">List widget</h3>
                <div className="float-sm-right mb-3">
                    <div className="form-check-inline">
                        <a className="btn btn-warning mr-2" href="#" onClick={() => {
                            moveUp(widget)
                        }}><i className="fa fa-arrow-up"></i></a>
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
                            <option value="LIST" selected>List</option>
                            <option value="LINK">Link</option>
                            <option value="IMAGE">Image</option>
                        </select>
                        <a className="btn btn-danger ml-2" href="#" onClick={() => deleteWidget(widget)}><i
                            className="fa fa-times"></i></a>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="form-group row">
                    <label className="col-sm-2">Write List Text</label>
                    <div className="col-sm-10">
                <textarea
                    placeholder="Enter one list item per line"
                    onChange={event => {
                        widget.listItems = (event.target.value).split("\n");
                        updateWidget(widget)
                    }}
                    className="form-control"
                    rows="3"
                    id="comment"
                > </textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2">Select List Type</label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            onChange={(event) => {
                                const val = event.target.value
                                if (val === "ordered") {
                                    widget.tagtype = "ol";
                                } else {
                                    widget.tagtype = "ul";
                                }
                                updateWidget(widget)

                            }}
                        >
                            <option value="unordered">Unordered List</option>
                            <option value="ordered">Ordered List</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2">Widget Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Enter widget name"
                               value={widget.title}/>
                    </div>
                </div>
            </div>
        }
        <h4 className="mb-3">Preview</h4>
        {console.log(widget.title)}
        {

            widget.tagtype === "ol" &&
            <ol>
                {
                    widget.listItems.map( row =>
                    <li>{row}</li>
                )
                }
            </ol>
        }

        {
            widget.tagtype === "ul" &&
            <ul>
                {widget.listItems.map( row =>
                    <li>{row}</li>
                )}
            </ul>
        }

    </div>
    </div>

export default ListWidget;