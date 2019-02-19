
let instance = null;
const server_url = "https://pacific-hamlet-73848.herokuapp.com/";
const MODULE_ID_URL = server_url + 'api/modules/';
const MODULE_DELETE_URL = server_url+'api/modules/';
// const MODULE_ADD_URL = server_url+'api/courses/{cid}/modules'



export default class ModuleService{

    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }

    findAllModules = (courseId) =>{
        // alert(courseId)
        const findUrl = server_url + "api/courses/"+courseId+"/modules";
        // alert(findUrl);
        return fetch(findUrl,{
            method:'get',
            credentials:'include'
        }).then(function (response) {
            return response.json()
        })
    }


    findModuleById = moduleId => {

        const idURL = MODULE_ID_URL + moduleId;

        // alert(idURL)

        return fetch(idURL , {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials:'include'
        })
            .then( function(response){

                console.log("====>",response.json());
                return response.json()


            })

    }

    deleteModule = moduleId => {

        const delURL = MODULE_DELETE_URL + moduleId;

        return fetch(delURL , {
            method: 'delete'
        })


    };

    createModule = (newModuleName, courseId) => {
        if(newModuleName.title === "" || newModuleName === undefined|| newModuleName===null) {
            newModuleName.title = "New Module"
        }
        // alert(newCourseName.title);
        // alert(newCourseName.id);
        const addURL = server_url + 'api/courses/' + courseId + '/modules';
        return fetch(addURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(newModuleName)
        })
            .then( function(response){

                return response.json()

            });

    }

    updateModule = (moduleId, newModuleTitle) => {

        const newModule = {
            title: newModuleTitle,
            id: moduleId
        }
        console.log("newMod ", newModule)
        const updateURL = server_url + "api/modules/" + moduleId;
        return fetch(updateURL,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(newModule)

        }).then(function (response) {

           return response.json();
        });
    }




}