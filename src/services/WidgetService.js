
let instance = null;
const server_url = "http://localhost:8080/";
const WIDGET_ID_URL = server_url + 'api/widget/';
const WIDGET_DELETE_URL = server_url+'api/widget/';



export default class WidgetService{

    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }

    findWidgetByTopicId = (topicId) =>{
        console.log("TOPIC ID IN WIDGET SERVICE METHOD ======>",topicId);
        const findUrl = server_url + "api/topic/"+topicId+"/widget";
        // alert(findUrl);
        return fetch(findUrl,{
            method:'get',
            credentials:'include'
        }).then(function (response) {
            return response.json()
        })
    }

    //
    // saveWidget = (topicId) => {
    //     const saveUrl = server_url + "api/topic/"+topicId+"/saveWidget";
    //
    //     return fetch(saveUrl,{
    //         method: 'post',
    //         credentials: 'include',
    //         body: JSON.stringify()
    //     }).then(function (response) {
    //         return response.json()
    //
    //     })
    // }


    findWidgetById = widgetId => {

        const idURL = WIDGET_ID_URL + widgetId;

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

    deleteWidget = widgetId => {

        const delURL = WIDGET_DELETE_URL + widgetId;

        return fetch(delURL , {
            credentials: 'include',
            method: 'delete'
        })


    };

    createWidget = (topicId, newWidgetName) => {
        if(newWidgetName.title === "" || newWidgetName === undefined|| newWidgetName===null) {
            newWidgetName.title = "New Widget"
        }
        // alert(newCourseName.title);

        console.log("TOPIC ID IN SERVICE====>",topicId);

        ///api/topic/{tid}/widget

       // alert(newCourseName.id);
        const addURL = (server_url + 'api/topic/' + topicId + "/" + newWidgetName.type + '/widget').toLowerCase();
        console.log(addURL);
        return fetch(addURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(newWidgetName)
        })
            .then( function(response){

                return response.json()

            });

    }

    updateWidget = (widgetId, newWidgetTitle) => {

        const newWidget = {
            title: newWidgetTitle,
            id: widgetId
        }
        console.log("newWid ", newWidget)
        const updateURL = server_url + "api/widget/" + widgetId;
        return fetch(updateURL,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(newWidget)

        }).then(function (response) {

            return response.json();
        });
    }




}