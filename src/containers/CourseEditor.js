import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './courseEditor.style.client.css'
import ModuleList from "../components/ModuleList";
import CourseService from '../services/CourseService';
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import WidgetList from "../components/WidgetList"
import HeadingWidget from "../components/HeadingWidget"
import WidgetReducer from "../reducers/WidgetReducer"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'

const store = createStore(WidgetReducer);

 class CourseEditor extends React.Component{


     constructor(props) {
         super(props)
         this.courseService = new CourseService()
         const courseId = parseInt(props.match.params.id)
         const course = this.courseService.findCourseById(courseId)
         console.log(course)
         this.state = {
             course: course,
             modules: course.modules,
             module: course.modules[0],
             lessons: course.modules[0].lessons,
             lesson: course.modules[0].lessons[0],
             newModuleTitle: '',
             newLessonTitle: '',
             newTopicTitle: '',
             selectedModuleName: '',
             selectedLessonName: '',
             selectedTopicName: '',
             topics: course.modules[0].lessons[0].topics,
             topic: course.modules[0].lessons[0].topics[0],
             widgets: course.modules[0].lessons[0].topics[0].widgets!=undefined?
                 course.modules[0].lessons[0].topics[0].widgets : []
         }
     }


     createModule = () => {

         var newModule = {
             id: (new Date()).getTime(),
             title: this.state.newModuleTitle,
             lessons: []
         }

         let tempModules = this.state.modules;
         tempModules.push(newModule);
         this.setState({
             modules: tempModules
         })

         document.getElementById("module-input").value = '';
     }


     titleChangedModule = (event) => {
         if(event.target.value === '') {
             this.setState(
                 {
                     newModuleTitle: 'New course'
                 });
         } else {
             this.setState(
                 {
                     newModuleTitle: event.target.value
                 });
         }
     }


     deleteModule = (module) => {
         for(var i=0; i<this.state.modules.length; i++) {
             if(this.state.modules[i].title == module.title) {
                 this.state.modules.splice(i, 1);
             }
         }
         console.log('modules length: '+this.state.modules.length);
     }

     selectModule = (module) => {
         if(module.lessons.length == 0) {
             this.setState({
                 module:module,
                 lessons: [],
                 topics: []
             })
         } else if(module.lessons[0].topics.length == 0) {
             this.setState({
                 module:module,
                 lessons: module.lessons,
                 topics: []
             })
         } else {
             this.setState({
                 module:module,
                 lessons: module.lessons,
                 topics: module.lessons[0].topics
             })
         }

     }

     placeModuleTitleInput = (module) => {
         document.getElementById("module-input").value = module.title;
         this.setState({
             selectedModuleName: module.title
         })
     }

     updateModule = () => {
         var tobeEditedModuleTitle = this.state.selectedModuleName;
         for(var i=0; i<this.state.modules.length; i++) {
             if(this.state.modules[i].title == tobeEditedModuleTitle) {
                 this.state.modules[i].title = this.state.newModuleTitle;
             }
         }
         document.getElementById("module-input").value = '';
         this.forceUpdate();
     }

     createLesson = () => {
         var newLesson = {
             id: (new Date()).getTime(),
             title: this.state.newLessonTitle,
             topics: []
         }

         let tempLessons = this.state.module.lessons;
         tempLessons.push(newLesson);
         document.getElementById("lesson-input-field").value = '';
         this.setState({
             lessons: tempLessons
         })
         console.log(this.state.lessons.title)
     }


     titleChangedLesson = (event) => {

         if(event.target.value === '') {
             this.setState(
                 {
                     newLessonTitle: 'New Lesson'
                 });
         } else {
             this.setState(
                 {
                     newLessonTitle: event.target.value
                 });
         }
     }

     deleteLesson = (lesson) => {
         for(var i=0; i<this.state.lessons.length; i++) {
             if(this.state.lessons[i].title == lesson.title) {
                 this.state.lessons.splice(i, 1);
             }
         }

         // if(this.state.lessons.length>0){
         //     this.setState({
         //         lesson: this.state.lessons[0]
         // })
         // }
     }

     selectLesson = (lesson) => {

         if(lesson.topics.length == 0) {
             this.setState({
                 topics: []
             })
         } else {
             this.setState({
                 topics: lesson.topics
             })
         }
     }


     placeLessonTitleInput = (lesson) => {
         document.getElementById("lesson-input-field").value = lesson.title;
         this.setState({
             selectedLessonName: lesson.title
         })
     }

     updateLesson = () => {
         var tobeEditedLessonTitle = this.state.selectedLessonName;
         for(var i=0; i<this.state.lessons.length; i++) {
             if(this.state.lessons[i].title == tobeEditedLessonTitle) {
                 this.state.lessons[i].title = this.state.newLessonTitle;
             }
         }
         document.getElementById("lesson-input-field").value = '';
         this.forceUpdate();
     }

     createTopic = () => {
         console.log('before length of topics: '+this.state.newTopicTitle);
         var newTopic = {
             id: (new Date()).getTime(),
             title: this.state.newTopicTitle,
             topics: []
         }

         let tempTopics = this.state.topics;
         tempTopics.push(newTopic);
         document.getElementById("topic-input-field").value = '';
         this.setState({
             topics: tempTopics
         })

         console.log('after length of topics: '+this.state.topics.length);
     }


     titleChangedTopic = (event) => {
         if(event.target.value === '') {
             this.setState(
                 {
                     newTopicTitle: 'New topic'
                 });
         } else {
             this.setState(
                 {
                     newTopicTitle: event.target.value
                 });
         }
     }

     deleteTopic = (topic) => {
         for(var i=0; i<this.state.topics.length; i++) {
             if(this.state.topics[i].title == topic.title) {
                 this.state.topics.splice(i, 1);
             }
         }
         if(this.state.topics.length>0){
             this.setState({
                 topic: this.state.topics[0]
             })
         }
         else{
             this.setState({
                 topic: {widgets: []}
             })
         }
     }

     placeTopicTitleInput = (topic) => {
         document.getElementById("topic-input-field").value = topic.title;
         this.setState({
             selectedTopicName: topic.title
         })
     }

     updateTopic = () => {
         var tobeEditedTopicTitle = this.state.selectedTopicName;
         for(var i=0; i<this.state.topics.length; i++) {
             if(this.state.topics[i].title == tobeEditedTopicTitle) {
                 this.state.topics[i].title = this.state.newTopicTitle;
             }
         }
         document.getElementById("topic-input-field").value = '';
         this.forceUpdate();
     }


     selectTopic = (topic) => {

         this.state.topic = topic;
         this.state.widgets = topic.widgets;
     }

     render() {
         store.dispatch({
             type: 'FIND_ALL_WIDGETS',
             widgets: this.courseService.findWidgets(this.state.topic.id),
             topicId: this.state.topic.id
         });
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark courseEditorNav">
                    <a className="navbar-brand" href="#"><i className="fa fa-times px-3"></i><strong>CS5610 -
                        WebDev</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    </div>
                    <div className="float-right"><a href="../index.html" className="text-white">Back to Home</a></div>
                </nav>
                <div className="row">
                    <div className="col-sm-3 bg-dark px-4" id="courseNamePills">
                        <ModuleList selectModule={this.selectModule}
                                    modules={this.state.course.modules}
                                    createModule = {this.createModule}
                                    titleChangedModule = {this.titleChangedModule}
                                    deleteModule = {this.deleteModule}
                                    placeModuleTitleInput = {this.placeModuleTitleInput}
                                    updateModule = {this.updateModule}/>
                    </div>
                    <div className="col-sm-9">
                        <LessonTabs
                            lessons={this.state.lessons}
                            createLesson={this.createLesson}
                            selectLesson = {this.selectLesson}
                            deleteLesson = {this.deleteLesson}
                            updateLesson = {this.updateLesson}
                            placeLessonTitleInput = {this.placeLessonTitleInput}
                            titleChangedLesson ={this.titleChangedLesson}
                        />

                        <span><div className="input-group">
                    <input type="text"
                           id="lesson-input-field"
                           onChange={this.titleChangedLesson}
                           placeholder="Enter lesson name"
                           aria-label="Enter lesson name"
                           aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button
                                onClick={ () => this.createLesson()}
                                className="btn btn-outline-secondary mx-2" type="button">Add</button>
                            <button
                                onClick={ () => this.updateLesson()}
                                className="btn btn-outline-secondary" type="button">Save</button>
                        </div>
                </div></span>



                        <TopicPills
                            topics={this.state.topics}
                            deleteTopic={this.deleteTopic}
                            placeTopicTitleInput={this.placeTopicTitleInput}
                            updateTopic={this.updateTopic}
                            createTopic = {this.createTopic}
                            selectTopic = {this.selectTopic}
                        />


                        <input type="text"
                               id="topic-input-field"
                               onChange={this.titleChangedTopic}
                               placeholder="Enter topic name"
                               aria-describedby="basic-addon2"

                        />
                        <div className="input-group-append">
                            <button
                                onClick={ () => this.createTopic()}
                                className="btn btn-outline-secondary" type="button">Add Topic</button>
                            <button
                                onClick={ () => this.updateTopic()}
                                className="btn btn-outline-secondary ml-2" type="button">Update Topic</button>

                        </div>
                        <Provider store={store}>
                            <WidgetListContainer/>
                        </Provider>
                    </div>
                </div>
            </div>
        );
    }
}
export default CourseEditor;