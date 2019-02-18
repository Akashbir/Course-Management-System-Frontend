
let instance = null;
const server_url = "http://localhost:8080/";
const MODULE_ID_URL = server_url + 'api/modules/';
const MODULE_DELETE_URL = server_url+'api/modules/';
// const MODULE_ADD_URL = server_url+'api/courses/{cid}/modules'

export default class LessonService {
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }

    addLesson=(lesson, moduleId) => {
        const createURL = server_url + "api/module/"+moduleId+"/lesson";
        return fetch(createURL,{
            method: 'post',
            credentials:'include',
            headers:{
                'content-type' :'application/json',
                'accept': "application/json"
            },
            body: JSON.stringify(lesson)
        }).then(res => res.json())
    }

    updateLesson = (lessonId, newLessonTitle) => {
        const updateURL = server_url + "api/lesson/" + lessonId
        return(fetch(updateURL,{
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(newLessonTitle)
        })).then(function (response) {
            return response.json();

        })

    }

    deleteLesson = (lesson) => {

        const delUrl = server_url + "api/lesson/" + lesson.id;
        return fetch (delUrl,{
            method:'delete'
        })

    }

    findLessonByModuleId = (moduleId) => {
        alert(moduleId);
        const findUrl = server_url + "api/module/"+moduleId+"/lesson";
        return fetch(findUrl).then(res => res.json())
   }
}