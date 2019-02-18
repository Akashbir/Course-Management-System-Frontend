let instance = null;
const server_url = "http://localhost:8080/";


export default class TopicService {
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;

    }

    addTopic=(topic, lessonId) => {
        alert("add topic clicked")
        const createURL = server_url + "api/lesson/"+lessonId+"/topic";
        // alert(createURL);
        return fetch(createURL,{
            method: 'post',
            credentials:'include',
            headers:{
                'content-type' :'application/json',
                'accept': "application/json"
            },
            body: JSON.stringify(topic)
        }).then(res => res.json())
    }

    deleteTopic = (topic) => {

        const delUrl = server_url + "api/topic/" + topic.id;
        return fetch (delUrl,{
            method:'delete'
        })

    }

    findTopicByLessonId = (lessonId) => {
        // alert(lessonId);
        const findUrl = server_url + "api/lesson/"+lessonId+"/topic";
        return fetch(findUrl, {
            method: 'get',
            credentials: 'include'
        }).then(res => res.json())
    }


    updateTopic = (topicId, newTopicTitle) => {
        const newTopic = {
            title: newTopicTitle,
            id: topicId
        }
        const updateURL = server_url + "api/topic/" + topicId;
        return fetch(updateURL,{
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(newTopic)
        }).then(function (response) {
            return response.json();

        })

    }

}