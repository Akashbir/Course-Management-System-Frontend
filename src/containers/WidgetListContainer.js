import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = (state, ownProps) => {
    return{
        widgets: state.widgets,
        topicId: ownProps.topicId,
        preview: state.preview
    }

}

const dispatchToPropertyMapper = dispatch => ({

    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: topicId =>
        dispatch({
            type: 'ADD_WIDGET',
            topicId: topicId
        }),
    updateWidget: widget =>{
        //console.log("IN CONTAINER==>", this.widgets);
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        })},

    previewWidget: () =>
        dispatch({
            type: 'PREVIEW'
        }),

    saveWidget: (topicId) =>{
        // console.log("IN CONTAINER SAVE METHOD TOPIC ID==>",topicId)
        dispatch({
            type: 'SAVE',
            topicId: topicId
        })},

    moveUp: widget =>
        dispatch({
            type: 'MOVE_UP',
            widget: widget
        }),

    moveDown: widget =>
        dispatch({
            type: 'MOVE_DOWN',
            widget: widget
        })


})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer