import * as _ from 'underscore';
import { ensureAuthorizedApi } from '../routes';


function handleRoutes(routes,app) {

    routes.forEach(route => {

        if(route.scope != 'public'){
            route.middleware.unshift(function(req,res,next){
                ensureAuthorizedApi(req,res,next,routes)
            });
        }

        let args = _.flatten([route.path, route.middleware]);

        switch(route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }

    });
}

export default handleRoutes;
