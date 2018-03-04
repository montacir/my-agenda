import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Sidebar, Body} from './components';
import LoginPage from "./pages/Login/LoginPage";


class Main extends Component {
    render() {
        return (
            <Body/>
        );
    }
}

const initMapStateToProps = ({auth_token}) => ({
    auth_token
});

export default connect(initMapStateToProps)(Main);