import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './courseEditor.style.client.css'
import ModuleList from "../components/ModuleList";
import CourseService from '../services/CourseService';
import LessonService from '../services/LessonService'
import TopicService from '../services/TopicService'
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import WidgetList from "../components/WidgetList"
import HeadingWidget from "../components/HeadingWidget"
import WidgetReducer from "../reducers/WidgetReducer"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'
import ModuleService from "../services/ModuleService";
import WidgetService from "../services/WidgetService";

const store = createStore(WidgetReducer);

 class CourseEditor extends React.Component{


     constructor(props) {
         super(props);
         this.courseService = new CourseService();
         this.moduleService = new ModuleService();
         this.lessonService = new LessonService();
         this.topicService = new TopicService();
         this.widgetService = new WidgetService();
         // const courseId = parseInt(props.match.params.id)
         // const course = this.courseService.findCourseById(courseId)
         // console.log(course)
         this.state = {
             courseId : parseInt(this.props.match.params.id),
             course: [],
             modules: [],
             module: "",
             lessons: [],
             lesson: "",
             // newModule:{
             //     title: '',
             //     id: ''
             // },
             newModuleTitle: '',
             newLessonTitle: '',
             newTopicTitle: '',
             selectedModule: '',
             selectedLessonName: '',
             selectedTopicName: '',

             topics: [],
             topic: [],
             widgets: [],
             widget: ""
         }
     }

     // componentWillMount() {
     //
     //     // console.log(courseId);
     //     // console.log(this.courseService.findCourseById(courseId).modules);
     //      this.courseService.findCourseById(this.state.courseId).then((response) => {
     //          this.setState({
     //              course: response,
     //              module: response.modules[0],
     //              modules: response.modules,
     //              lesson: response.modules[0].lessons[0],
     //              lessons: response.modules[0].lessons,
     //              topic: response.modules[0].lessons[0].topics[0],
     //              topics: response.modules[0].lessons[0].topics
     //
     //          })
     //      })
     //
     //
     // }

     componentWillMount() {
         this.courseService.findCourseById(this.state.courseId).then((response) => {
             // console.log("aaa>",response);
             // console.log("res>>>", response);
             const course = response;
             console.log("COURSE==>",course);
             if (course.modules === undefined || course.modules == null ) {
                 this.setState(
                     {
                         course: course,
                         modules : [],
                         module:  {
                             title: "",
                             lessons:[]
                         },
                         lessons : [],
                         lesson : {
                             title:"",
                             topics:[]
                         },

                         topics: [],
                         topic : {
                             title:""
                         },

                         widgets: [],
                         widget : ""

                     }
                 )
             }

             else if(course.modules.lessons === undefined || course.modules.lessons == null || course.modules.lessons.length===0){
                 this.setState({
                     course: course,
                     module: course.modules[0],
                     modules: course.modules,
                     lessons: [],
                     lesson: {
                         title: "",
                         topics: []
                     },
                     topic: {
                         title: ""
                     },
                     widgets: []
                 })
             }

             else if(course.modules.lessons.topics === undefined || course.modules.lessons.topics === null || course.modules.lessons.topics.length===0){
                 this.setState({
                     course: course,
                     module: course.modules[0],
                     modules: course.modules,
                     lessons: [],
                     lesson: {
                         title: "",
                         topics: []
                     },
                     topic: {
                         title: ""
                     },
                     widgets: []
                 })

             }
             else if (course.modules.lessons.topics.widgets === undefined || course.modules.lessons.topics.widgets == null || course.modules.lessons.topics.widgets.length === 0){
                 this.setState(
                     {
                         course: course,
                         module: course.modules[0],
                         modules:course.modules,
                         lesson: course.modules[0].lessons[0],
                         lessons:course.modules[0].lessons,
                         topics: course.modules[0].lessons[0].topics,
                         topic:  course.modules[0].lessons[0].topics[0] === undefined ? 0 : response.modules[0].lessons[0].topics[0],
                         widgets:[],
                     }
                 )
             }

             else {
                 this.setState(
                     {
                         course: course,
                         modules:course.modules,
                         module: course.modules[0],

                          lessons:course.modules[0].lessons,
                         lesson: course.modules[0].lessons[0],

                         topics: course.modules[0].lessons[0].topics,
                         topic:  course.modules[0].lessons[0].topics[0] === undefined ? 0 : response.modules[0].lessons[0].topics[0],

                         widgets: course.modules[0].lessons[0].topics[0].widgets,
                       //  widget: course.modules[0].lessons[0].topics[0].widgets[0]
                     }
                 )
             }
         });
     }


     // createModule = () => {
     //
     //     var newModule = {
     //         id: (new Date()).getTime(),
     //         title: this.state.newModuleTitle,
     //         lessons: []
     //     }
     //
     //     let tempModules = this.state.modules;
     //     tempModules.push(newModule);
     //     this.setState({
     //         modules: tempModules
     //     })
     //
     //     document.getElementById("module-input").value = '';
     // }

     createModule = () => {
         // alert(this.state.courseId);
         console.log(this.state.newModule);
         let module = {
             "title" : this.state.newModuleTitle,
             lessons: []
         }
         this.moduleService.createModule(module, this.state.courseId).then(
             response => {
                 // console.log(response)
                 this.setState({
                     modules: [...this.state.modules, response]
                 })
             }

         )
     }


     titleChangedModule = (event) => {
         if(event.target.value === '') {
             this.setState(
                 {
                     newModuleTitle: 'New Module'
                 });
         } else {
             this.setState(
                 {
                     newModuleTitle: event.target.value
                 });
         }
     }


     // deleteModule = (moduleId) => {
     //     console.log(this.moduleService.findModuleById(moduleId));
     //     // this.moduleService.deleteModule(this.state.moduleService.findModuleById(moduleId));
     //     // console.log('modules length: '+this.state.modules.length);
     // }


     deleteModule = (module) => {
         // alert(module.id)
         this.moduleService.deleteModule(module.id).then(
             () => {
                 this.courseService.findCourseById(this.state.courseId).then(
                     res => {
                         this.setState({
                             modules: res.modules
                         })
                     }
                 )
             }
         )
     }

     deleteLesson = (lesson) => {
         alert(this.state.lesson.id)
         this.lessonService.deleteLesson(lesson).then(() => {
             this.lessonService.findLessonByModuleId(this.state.module.id).then((res) => {
                 this.setState({
                     lessons: res
                 })
             })
         })
     }

     deleteTopic = (topic) => {
         this.topicService.deleteTopic(topic).then(() => {
             this.topicService.findTopicByLessonId(this.state.lesson.id).then((res) => {
                 this.setState({
                     topics: res
                 })
             })
         })
     }

     selectModule = (module) => {
         if(module.lessons.length === 0 || module.lessons===undefined) {
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
             this.moduleService.findAllModules(this.state.courseId).then(response => {
                 this.setState({
                     module: module,
                     modules: response,
                     lessons: module.lessons,
                     lesson: module.lessons[0],
                     topics: module.lessons[0].topics
                 })
             })
         }

     }

     placeModuleTitleInput = (module) => {
         document.getElementById("module-input").value = module.title;
         this.setState({
             selectedModule: module
         })
     }

     updateModule = () => {
         // var tobeEditedModuleTitle = this.state.selectedModuleName;
         // for(var i=0; i<this.state.modules.length; i++) {
         //     if(this.state.modules[i].title == tobeEditedModuleTitle) {
         //         this.state.modules[i].title = this.state.newModuleTitle;
         //     }
         // }
         // document.getElementById("module-input").value = '';
         // this.forceUpdate();

         // alert(this.state.selectedModule.id)

        if(this.state.newModuleTitle === "" || this.state.newModuleTitle===undefined){
            this.state.newModuleTitle = this.state.selectedModule.title;

        }
        this.moduleService.updateModule(this.state.selectedModule.id,this.state.newModuleTitle)
            .then(() =>
                // console.log("update ==>",res)
            this.moduleService.findAllModules(this.state.courseId).then(response => {
                console.log("inside update moduke", response)
                this.setState({
                    modules: response
                })
            })
        )


     }

     updateLesson = () => {

         if(this.state.newLessonTitle === "" || this.state.newLessonTitle===undefined){
             this.state.newLessonTitle = this.state.selectedLessonName.title;

         }
         this.lessonService.updateLesson(this.state.selectedLessonName.id,this.state.newLessonTitle)
             .then(() =>
                 // console.log("update ==>",res)
                 this.lessonService.findLessonByModuleId(this.state.module.id).then(response => {
                     console.log("inside update lesson", response)
                     this.setState({
                         lessons: response
                     })
                 })
             )
     }


     updateTopic = () => {
         if(this.state.newTopicTitle === "" || this.state.newTopicTitle===undefined){
             this.state.newTopicTitle = this.state.selectedTopicName.title;

         }
         this.topicService.updateTopic(this.state.selectedTopicName.id,this.state.newTopicTitle)
             .then(() =>
                 // console.log("update ==>",res)
                 this.topicService.findTopicByLessonId(this.state.lesson.id).then(response => {
                     console.log("inside update topic", response)
                     this.setState({
                         topics: response
                     })
                 })
             )

     }



     createLesson = () => {
         const newLesson = {
             title: this.state.newLessonTitle
         }
         this.lessonService.addLesson(newLesson, this.state.module.id).then(
             (res) => this.setState({
                 lessons: [...this.state.lessons, res]
             })
         )
     }


     createTopic = () => {

         const newTopic = {
             title: this.state.newTopicTitle
         }

         // alert(newTopic.title)
         // alert("lesson id" + this.state.lesson.id);
         // alert("topic id"+ this.state.topic.id);
         this.topicService.addTopic(newTopic, this.state.lesson.id).then(
             (res) => this.setState({
                 topics: [...this.state.topics, res]
             })
         )

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



     selectLesson = (lesson) => {
            this.lessonService.findLessonById(lesson.id).then(
                response => {
                    this.setState({
                        lesson: response,
                        topics: response.topics
                    })
                }
            )

     }


     placeLessonTitleInput = (lesson) => {
         document.getElementById("lesson-input-field").value = lesson.title;
         this.setState({
             selectedLessonName: lesson
         })
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



     placeTopicTitleInput = (topic) => {
         document.getElementById("topic-input-field").value = topic.title;
         this.setState({
             selectedTopicName: topic
         })
     }




     selectTopic = (topic) => {

         this.state.topic = topic;
         this.state.widgets = topic.widgets;
         this.setWidgets(topic.id);


         // this.widgetService.findWidgetByTopicId(this.state.topic.id).then((response) => {
         //     store.dispatch({
         //         type: 'FIND_ALL_WIDGETS',
         //         widgets: response,
         //         topicId: topic.id
         //
         //     })
         //
         //     this.setState({
         //
         //     })
         // })

     }

     setWidgets(topicId){
         this.widgetService.findWidgetByTopicId(topicId).then((response) => {
             store.dispatch({
                 type: 'FIND_ALL_WIDGETS',
                 widgets: response.sort((a,b) => parseInt(a.widgetOrder) - parseInt(b.widgetOrder)),
                 topicId: topicId


             })
         })


     }




     render() {
         console.log("BEFORE STORE DISPATCH====")
         console.log("BEFORE STORE DISPATCH TOPIC ID", this.state.topic.id)
         // store.dispatch({
         //     type: 'FIND_ALL_WIDGETS',
         //     widgets: this.state.widgets,
         //     topicId: this.state.topic.id
         // });
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
                                    modules={this.state.modules}
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
                            <WidgetListContainer topicId = {this.state.topic.id}/>
                        </Provider>
                    </div>
                </div>
            </div>
        );
    }
}
export default CourseEditor;