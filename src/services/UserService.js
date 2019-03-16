let instance = null;
const loginUrl = "http://localhost:8080/api/login";
const profileUrl = "http://localhost:8080/api/profile";
const updateUrl = "http://localhost:8080/api/user/updateUser/";
const logoutUrl = "http://localhost:8080/api/logout";
const registerUrl = "http://localhost:8080/register";



class UserService{
    constructor(){
        if (!instance) {
            instance = this;
        }
        return instance;
    }


    login =  (loginUser) => {
        return fetch(loginUrl,{

            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(loginUser)

    }).then(response => response.json())
    }

    profile = () => {
        return fetch(profileUrl,{
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(response => response.json())
    }

    logout = () => {
        return fetch(logoutUrl,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }

    register = (newUser) => {
        return fetch(registerUrl,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(newUser)
        }).then(function (response) {
            return response.json();

        })


    }

    update = (userId, user) => {
        const updatedUserUrl = updateUrl + userId;
        return fetch(updatedUserUrl,{
                method: 'put',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            credentials: 'include',
            body: JSON.stringify(user)

            }

        ).then(function (response) {
            return response.json();

        })
    }


}

export default UserService