export const superAdmin = {
    email: 'a',
    password: 'a'
}


export const secret = 'thisissecret';

let DBConfig;
if (process.env.NODE_ENV == 'Test')
    DBConfig = 'mongodb://127.0.0.1:27017/react-express';
else
    DBConfig = 'mongodb://127.0.0.1:27017/react-express-test';

export {DBConfig};

export const styleEventTypes = ['label-primary', 'label-success', 'label-info', 'label-default', 'label-warning', 'label-danger'];