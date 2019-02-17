import courses from './courses.json'

let instance = null;
const COURSE_API_URL = 'http://localhost:8080/api/courses'
const COURSE_ID_URL = 'http://localhost:8080/api/courses/'

class CourseService {
    constructor() {

        if (!instance) {
            instance = this;
        }
        return instance;
    }

    addCourse = course => {
        if (course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }}
            else {
            course = {
                id: (new Date()).getTime(),
                title: course.title

            }
        }
        console.log(course.id);
        this.courses.push(course);
        return this.courses
    };


    findCourseById = courseId => {

        const idURL = COURSE_ID_URL + courseId;

        return fetch(idURL , {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            },
            credentials:'include'
        })
            .then( function(response){

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

    deleteCourse = deleteCourse => {
        console.log(deleteCourse)
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        );
    }



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