import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import store from './store';

import Main from './Main';

class App extends Component {
    /*state = {
        isReady: false
    }

    componentDidMount() {
        persistStore(store, {storage}, () => {
            this.setState({isReady: true})
        });
    }*/

    render() {
        /*if(!this.state.isReady){
            return <div>Loading</div>;
        }*/
        return (
            <HashRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistStore(store)}>
                        <Main/>
                    </PersistGate>
                </Provider>
            </HashRouter>
        );
    }
}

export default App;
