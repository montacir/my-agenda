import path from 'path';
import { login,logout } from './AuthCtrl';

export const MainRoutes = [
    {
        path: '/login',
        httpMethod: 'POST',
        middleware: [login],
        scope: 'public'
    },
    {
        path: '/logout',
        httpMethod: 'POST',
        middleware: [logout]
    },
    {
        path: '/isAlive',
        httpMethod: 'GET',
        middleware: [function(req, res) {
           console.log("GET - /isAlive",req.session);
           return res.send(req.session.user);
        }]
    },
    {
        path: '/status',
        httpMethod: 'GET',
        scope: 'public',
        middleware: [function(req, res) {
            res.send({
              status: 'OK'
            });
        }]

    },
    {
        path: '*',
        httpMethod: 'GET',
        scope: 'public',
        middleware: [function(req, res) {
            res.render('index');
        }]

    }];


