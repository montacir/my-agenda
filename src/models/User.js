import axios from 'axios';


//if (typeof localStorage != 'undefined')
//    axios.defaults.headers.common['token'] = SessionManager.get('token');

class User {

    static login(user, callback) {
        return axios.post('/login', user)
            .then((response) => {
                callback(Object.assign({}, response.data, {error: false}));
            })
            .catch((error) => {
                callback(Object.assign({}, error, {error: true}));
            });
    }

}

export default User;
