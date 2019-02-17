

import CourseService from '../services/CourseService'
import CourseEditor from '../containers/CourseEditor'

const courseService = new CourseService();

const widgetReducer = (state , action) => {
    switch(action.type) {
        case 'DELETE_WIDGET':
            courseService.deleteWidget(action.widget.id);
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        case 'ADD_WIDGET':
            // console.log(state.widgets)
            const newWidgetObj =   {
                type: 'HEADING',
                text: 'New Widget',
                size: 1,
                id: Math.random()
            };

            if(state.widgets === undefined){
                state.widgets = []
            }
            // return {
            //     widgets: [
            //         ...state.widgets,
            //         {
            //             type: 'HEADING',
            //             text: 'New Widget',
            //             size: 1,
            //             id: (new Date()).getTime()
            //         }
            //     ]
            // }
            let newWidgetList = {
                widgets: [
                    ...state.widgets,
                    newWidgetObj
                ]
            };
            // console.log(state.topicId)
            courseService.createWidget(state.topicId, newWidgetObj);
            return newWidgetList;


        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }

        case 'FIND_ALL_WIDGETS':
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