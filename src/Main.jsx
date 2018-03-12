import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {Body} from './components';
import LoginPage from "./pages/Login/LoginPage";


class Main extends Component {
    render() {
        return this.props.auth_token ? <div>
            <Body/>
        </div> : <LoginPage/>;
    }
}

const initMapStateToProps = ({login}) => {
    console.log('home state', login);
    const {auth_token} = login;
    if (auth_token != null)
        axios.defaults.headers.common['token'] = auth_token;
    return {
        auth_token
    };
};

export default connect(initMapStateToProps)(Main);