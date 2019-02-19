let instance = null;
const loginUrl = "https://pacific-hamlet-73848.herokuapp.com/api/login";
const profileUrl = "https://pacific-hamlet-73848.herokuapp.com/api/profile";
const updateUrl = "https://pacific-hamlet-73848.herokuapp.com/api/user/updateUser/";
const logoutUrl = "https://pacific-hamlet-73848.herokuapp.com/api/logout";
const registerUrl = "https://pacific-hamlet-73848.herokuapp.com/register";



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