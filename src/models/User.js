import axios from 'axios';
import SessionManager from './SessionManager';

if(typeof localStorage != 'undefined')
	axios.defaults.headers.common['token'] = SessionManager.get('token');

class User{

	static isConnected(){
		console.log('token',SessionManager.get('token'));
		return SessionManager.get('token');
	}

	static me(){
		return SessionManager.get('user');
	}

	static login(user,callback){
		return axios.post('/login', user)
		.then((response) =>{
			if(typeof localStorage != 'undefined'){
				SessionManager.put('token',response.data.token);
				SessionManager.put('user',response.data.user);
			}
			callback(null);
		})
		.catch((error) =>{
			callback(error);
		});
	}
	static logout(){
		SessionManager.delete('user');
		SessionManager.delete('token');
	}

	static getUsers(){
		return axios.get('/api/users');
	}
	//For creating and updating User
	static putUser(user){
		return axios.put('/api/user/'+user._id,user);
	}
	static deleteUser(userId){
		return axios.delete('/api/user/'+userId);
	}
}

export default User;
