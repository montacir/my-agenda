import express from 'express';
import path from 'path';
//import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import handleRoutes from './kernel/handleRoutes';

import {UserRoutes, MainRoutes,EventRoutes} from './routes';
import {DBConfig} from './kernel/config/settings';

const app = express();


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));


//Set up default mongoose connection

mongoose.connect(DBConfig);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/*******************************Models & Routes***********************/

handleRoutes(UserRoutes, app);
handleRoutes(EventRoutes, app);


handleRoutes(MainRoutes, app);

/*******************************Models & Routes***********************/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        status: err.status || 500,
        message: err.message
    });
});

export default app;
