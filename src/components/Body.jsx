import React from 'react';
import {ConnectedHeader, Footer} from './Header';

import {  Route } from 'react-router-dom';

import { Home, AgendaPage } from '../pages';

const Body = () => (
    <div  className="body-content">
        <ConnectedHeader/>

        <Route exact path="/home"  component={Home} />

        <Route exact path="/"  component={AgendaPage} />
        <Footer/>

    </div>
);

export {Body};