import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
    // topicId: ownProps.topicId
})

const dispatchToPropertyMapper = dispatch => ({
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

    previewWidget: () =>
        dispatch({
            type: 'PREVIEW'
        }),

    saveWidget: () =>
        dispatch({
           type: 'SAVE'
        }),

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