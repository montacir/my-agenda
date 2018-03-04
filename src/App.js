import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Main from './Main.jsx';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        );
    }
}

export default App;
