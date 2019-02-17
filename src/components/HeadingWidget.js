import React from 'react'


const HeadingWidget  = ({widget, updateWidget, deleteWidget, preview, moveUp, moveDown}) =>
    <div>

        <div className="my-4 border p-4">
            {/*{*/}
                {/*preview !== true &&*/}
                {/*<h1>TESTING</h1>*/}

                <div id="headingw">
                    {
                        preview !== true &&
                        <div>
                            <h3 className="mb-3 float-sm-left">Heading widget</h3>
                            <div className="float-sm-right mb-3">
                                <div className="form-check-inline">
                                    <a className="btn btn-warning mr-2" onClick={() => {moveUp(widget)}} href="#"><i
                                        className="fa fa-arrow-up"></i></a>
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
                                    >
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
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
                                <label className="col-sm-2">Heading Text</label>
                                <div className="col-sm-10">
                                    <input
                                        value={widget.text}
                                        onChange={event => {
                                            widget.text = event.target.value;
                                            updateWidget(widget)
                                        }}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter heading text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2">Select Heading Size</label>
                                <div className="col-sm-10">
                                    <select
                                        onChange={event => {
                                            widget.size = parseInt(event.target.value)
                                            updateWidget(widget)
                                        }}
                                        className="form-control">
                                        <option value="1">Heading 1</option>
                                        <option value="2">Heading 2</option>
                                        <option value="3">Heading 3</option>
                                        <option value="4">Heading 4</option>
                                        <option value="5">Heading 5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2">Widget Name</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        placeholder="Enter Widget Name"
                                    />
                                </div>
                            </div>
                        </div>
                    }

                    <h4 className="mb-3">Preview</h4>
                            {
                                widget.size === 1 && <h1>{widget.text}</h1> ||
                                widget.size === 2 && <h2>{widget.text}</h2> ||
                                widget.size === 3 && <h3>{widget.text}</h3> ||
                                widget.size === 4 && <h4>{widget.text}</h4> ||
                                widget.size === 5 && <h5>{widget.text}</h5>
                            }

                </div>
            <br/>
            <hr/>
            <br/>



    </div>
    </div>

export default HeadingWidget;