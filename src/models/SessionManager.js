
class SessionManager{

	static get(key){

		try {
            return JSON.parse(localStorage.getItem(key));
        } catch(e){
            return localStorage.getItem(key);
        }
	}

	static put(key,value){
		localStorage.setItem(key,value);
	}

	static delete(key){
		localStorage.setItem(key,null);
	}
}

export default SessionManager;
