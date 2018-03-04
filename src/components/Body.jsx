import React from 'react';
import {Header, Footer} from './Header.jsx';

import { RightSideBar } from './Sidebar.jsx';

import {  Route } from 'react-router-dom';

import { Home, AgendaPage } from '../pages';

const Body = () => (
    <div  className="body-content">


        <Route exact path="/home"  component={Home} />

        <Route exact path="/"  component={AgendaPage} />
        <Footer/>

        <RightSideBar/>
    </div>
);

export {Body};