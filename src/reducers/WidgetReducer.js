

import CourseService from '../services/CourseService'
import CourseEditor from '../containers/CourseEditor'
import TopicService from "../services/TopicService";
import WidgetService from "../services/WidgetService";

const widgetService = new WidgetService();

const widgetReducer = (state = {
    widgets:[],
} , action) => {
    switch(action.type) {
        case 'DELETE_WIDGET':
            if ( action.widget.id !== undefined) {
                const w = widgetService.deleteWidget(action.widget.id);
            }
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            };
        case 'ADD_WIDGET':
             console.log("REDUCER ADD WIDGET===>",state.widgets)
            const newWidgetObj =   {
                type: 'HEADING',
                text: 'New Widget',
                size: 1
            };

            if(state.widgets === undefined){
                state.widgets = []
            }

            if(state.widgets.length === 0){
                newWidgetObj.widgetOrder = 1
            }
            else{
                newWidgetObj.widgetOrder = state.widgets[state.widgets.length - 1].widgetOrder + 1;
            }

            let newWidgetList = {
                widgets: [
                    ...state.widgets,
                    newWidgetObj
                ]
            };
            return newWidgetList;


        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                // console.log(action.widget);
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }

        case 'FIND_ALL_WIDGETS':
            console.log("TOPIC ID ALL ==> reducer:", action.topicId)
            console.log("CURRENT REDUCER WIDGETS FIND ALL", action.widgets);
            return{
                widgets: action.widgets,

                topicId: action.topicId,
                preview: false
            };

        case 'PREVIEW':
            return{
                preview : !state.preview,
                widgets: state.widgets
            };

        case 'MOVE_UP':
            let index = state.widgets.indexOf(action.widget);
            console.log(state.widgets);
            state.widgets.move(index, index - 1);

            return{
                widgets: [...state.widgets],
                preview: state.preview,
                topicId: state.topicId
            };


        case 'SAVE':
            console.log("IN SAVE WIDGET",state.widgets)
            console.log("IN SAVE WIDGET : TOPIC ID ====>>" , action.topicId);
            state.widgets.map((widget) => {
                widgetService.createWidget(action.topicId, widget)
            })
            return {
                widgets: state.widgets,
                topicId: action.topicId,
                preview: false
            }

        case 'MOVE_DOWN':
            let indexOfDown = state.widgets.indexOf(action.widget);
            console.log(state.widgets);
            state.widgets.move(indexOfDown, indexOfDown + 1);

            return{
                widgets: [...state.widgets],
                preview: state.preview,
                topicId: state.topicId
            };


        default:
            return state;
    }
};

Array.prototype.move
    = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};


export default widgetReducer;