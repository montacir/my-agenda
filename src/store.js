import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {  persistReducer } from 'redux-persist'
import { reducers } from './reducers/index';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login']
}
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

export default store;