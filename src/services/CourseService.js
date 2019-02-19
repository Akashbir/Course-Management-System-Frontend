import courses from './courses.json'

let instance = null;

const SERVER_URL = 'https://pacific-hamlet-73848.herokuapp.com/';

const COURSE_API_URL = SERVER_URL + 'api/courses';
const COURSE_ID_URL = SERVER_URL+ 'api/courses/';
const COURSE_DELETE_URL = SERVER_URL+ 'api/courses/';
const COURSE_ADD_URL = SERVER_URL+ 'api/courses';

class CourseService {
    constructor() {

        if (!instance) {
            instance = this;
        }
        return instance;
    }

    // addCourse = course => {
        // if (course === null) {
        //     course = {
        //         id: (new Date()).getTime(),
        //         title: 'New Course'
        //     }}
        //     else {
        //     course = {
        //         id: (new Date()).getTime(),
        //         title: course.title
        //
        //     }
        // }
        // console.log(course.id);
        // this.courses.push(course);
        // return this.courses

    //     return fetch(COURSE_ADD_URL , {
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         credentials:'include'
    //     })
    //         .then( function(response){
    //
    //             return response.json()
    //
    //         })
    //
    //
    //
    // };

    createCourse = (newCourseName) => {
        if(newCourseName.title === "" || newCourseName === undefined|| newCourseName===null) {
            newCourseName.title = "New Course"
        }
        // alert(newCourseName.title);
        // alert(newCourseName.id);
        return fetch(COURSE_ADD_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(newCourseName)
        })
            .then( function(response){

                return response.json()

            });

    }


    findCourseById = courseId => {

        const idURL = COURSE_ID_URL + courseId;

        return fetch(idURL , {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials:'include'
        })
            .then( function(response){

                // console.log(response.json());
                return response.json()


            })

    }

    findAllCourses = () =>{
        return fetch(COURSE_API_URL , {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            },
            credentials:'include'
        })
            .then( function(response){

                return response.json()

            })
    };

    deleteCourse = courseId => {
        const delURL = COURSE_DELETE_URL + courseId;

        return fetch(delURL , {
            method: 'delete',
        })


    };



    findWidgets = topicId => {

        for(const course of this.courses){
            for(const module of course.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                        if(topic.id===parseInt(topicId)){
                            return topic.widgets
                        }
                    }

                }
            }
        }

    }


    findWidget = widgetId => {

        for(const course of this.courses){
            for(const module of course.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                        for(const widget of topic.widgets){
                            if(widget.id===parseInt(widgetId)){
                                return widget
                            }
                        }
                    }
                }
            }
        }

    }


    createWidget = (topicId, widget) => {

        for(const course of this.courses){
            for(const module of course.modules){
                for(const lesson of module.lessons){
                    for(const topic of lesson.topics){
                        if(topic.id===parseInt(topicId)){
                            this.findWidgets(topicId).push(widget);
                        }
                    }
                }
            }
        }

    }

    deleteWidget = (widgetId) => {
        for (const course of this.courses) {
            for (const module of course.modules) {
                for (const lesson of module.lessons) {
                    for (const topic of lesson.topics) {
                        if (topic.widgets !== undefined) {
                            topic.widgets = topic.widgets.filter(w => w.id !== parseInt(widgetId))
                            return topic.widgets
                        }
                    }
                }
            }
        }
    }









    // updateWidget = (widgetId, widget) => {
    //     if(this.)
    //
    //
    // }

    // deleteWidget = deleteWidget => {
    //     this.widgets = this.widgets.filter(
    //         widget => widget.id !== deleteWidget.id
    //     );
    // }



}
export default CourseService