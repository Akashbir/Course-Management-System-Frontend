import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget"

const WidgetComponent = ({widget, deleteWidget, updateWidget, preview, moveUp, moveDown}) =>
    <div>
        {/*<button onClick={() => deleteWidget(widget)}>Delete</button>*/}
        {/*<select*/}
            {/*onChange={(event) => {*/}
                {/*widget.type = event.target.value*/}
                {/*updateWidget(widget)*/}
            {/*}}*/}
            {/*className="form-control" value={widget.type}>*/}
            {/*<option value="HEADING">Heading</option>*/}
            {/*<option value="IMAGE">Image</option>*/}
            {/*<option value="PARAGRAPH">Paragraph</option>*/}
            {/*<option value="LIST">List</option>*/}
            {/*<option value="LINK">Link</option>*/}
        {/*</select>*/}
        {
            widget.type=='HEADING' &&
            <HeadingWidget
                preview = {preview}
                updateWidget={updateWidget}
                widget={widget}
                deleteWidget={deleteWidget}
                moveUp = {moveUp}
                moveDown = {moveDown}
            />
            ||
            widget.type=='IMAGE'   && <ImageWidget updateWidget={updateWidget}
                                                   preview = {preview}
                                                   widget={widget}
                                                   deleteWidget={deleteWidget}
                                                   moveUp = {moveUp}
                                                   moveDown = {moveDown}
            />
            ||
            widget.type=='PARAGRAPH'   && <ParagraphWidget updateWidget={updateWidget}
                                                   widget={widget}
                                                           preview = {preview}
                                                   deleteWidget={deleteWidget}
                                                           moveUp = {moveUp}
                                                           moveDown = {moveDown}
            />
            ||
            widget.type=='LIST'   && <ListWidget updateWidget={updateWidget}
                                                 preview = {preview}
                                                           widget={widget}
                                                           deleteWidget={deleteWidget}
                                                 moveDown = {moveDown}
                                                 moveUp = {moveUp}/>
            ||
            widget.type=='LINK'   && <LinkWidget updateWidget={updateWidget}
                                                 preview = {preview}
                                                 widget={widget}
                                                 deleteWidget={deleteWidget}
                                                 moveDown = {moveDown}
                                                 moveUp = {moveUp}/>
        }
    </div>

export default WidgetComponent