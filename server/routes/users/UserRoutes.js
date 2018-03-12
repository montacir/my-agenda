import { createUser, getUsers, addOrUpdateUser, deleteUser} from './UserCtrl';

export const UserRoutes = [
    {
        path: '/api/user',
        httpMethod: 'POST',
        scope : 'public',
        middleware: [createUser]
    },
    {
        path: '/api/users',
        httpMethod: 'GET',
        scope : 'private',
        middleware: [getUsers]
    },
    {
        path: '/api/user/:id',
        httpMethod: 'PUT',
        scope : 'private',
        middleware: [addOrUpdateUser]
    },
    {
        path: '/api/user/:id',
        httpMethod: 'DELETE',
        scope : 'private',
        middleware: [deleteUser]
    }

];
