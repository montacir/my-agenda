import React, {Component} from 'react';
import {connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

    logout = () => {
        this.props.logout();
    };

    render() {
        return (
            <div className="header-section">
                <div className="logo dark-logo-bg hidden-xs hidden-sm">
                    <a href="index-2.html">
                        <img src="img/logo-icon.png" alt=""/>

                        <span className="brand-name">Agenda</span>
                    </a>
                </div>

                <div className="icon-logo dark-logo-bg hidden-xs hidden-sm">
                    <a href="index-2.html">
                        <img src="img/logo-icon.png" alt=""/>

                    </a>
                </div>


                <div className="notification-wrap">

                    <div className="right-notification">
                        <ul className="notification-menu">

                            <li>

                                <div className="right-notification">
                                    <ul className="notification-menu">

                                        <li>
                                            <a href="javascript:;" className="btn btn-default dropdown-toggle"
                                               data-toggle="dropdown">
                                                <img src="img/avatar-mini.jpg" alt=""/>User
                                                <span className=" fa fa-angle-down"></span>
                                            </a>
                                            <ul className="dropdown-menu dropdown-usermenu purple pull-right">
                                                    <li><a onClick={this.logout}><i
                                                        className="fa fa-sign-out pull-right"></i> Log
                                                        Out</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const Footer = () => (
    <footer>
        Made By Montacir.
    </footer>
);

const ConnectedHeader = connect(null,actions)(Header);
export {ConnectedHeader, Footer};