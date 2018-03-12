import { User } from './User';
import * as _ from 'underscore';
import { isEmailValid } from '../../kernel/utils';


export function createUser(req,res){
    console.log('POST - /api/user',req.body);
    var err = {};
    if(!req.body.email || req.body.email.trim()=="" ){
        err = underscore.extend(err,{
            email: "REQUIRED"
        });
    }else{
        if(!isEmailValid(req.body.email)){
            err = _.extend(err,{
                email: "NOT_VALID"
            });
        }
    }

    if(!req.body.password || req.body.password.trim()=="" ){
        err = _.extend(err,{
            password: "REQUIRED"
        });
    }

    if(!_.isEmpty(err)){
        return res.json(res, 500, err);
    }else{

        const user = new User(_.pick(req.body,'email','name'));
        user.generateHash = req.body.password;
        user.save(function(err, user){
            if(!err){
                
                const _user = user.lean;

                return res.json(200,{user: _user});
                
            } else {
                var ErrType = err.errmsg;
                if(ErrType.indexOf("duplicate") > -1){
                    if(ErrType.indexOf("email") > -1){
                        err = {
                            email : "DUPLICATED"
                        }                                
                    }                    
                    return res.json( 500, err);
                }
                else{
                    return res.json(500, {
                        error: true
                    });
                }
            }
        });
    }
}

export function getUsers(req,res){
    console.log('GET - /api/users');
    User.find({}).select({ name: 1, email: 1 }).lean().exec(function(err,users) {
        if(err){
            return res.json(500, {
                    error: true
                });
        }
        return res.json(200, users);

    })
        
}
export function putUser(req,res){
    console.log('PUT - /api/user/:id',req.params.id, req.body);
    var err = {};
    if(!req.body.email || req.body.email.trim()=="" ){
        err = underscore.extend(err,{
            email: "REQUIRED"
        });
    }else{
        if(!isEmailValid(req.body.email)){
            err = _.extend(err,{
                email: "NOT_VALID"
            });
        }
    }

    if(!_.isEmpty(err)){
        console.log('validation error:',err);
        return res.json(res, 500, err);
    }else{

        User.findOne({_id:req.params.id}).exec(function(err,user) {
            if(err){
                return res.json(res, 500, err);
            }
            user = _.extend(user,_.pick(req.body,'email','name'));

            if(req.body.password) 
                user.generateHash = req.body.password;

            user.save(function(err, user){
                if(!err){
                    return res.json(200);  
                } else {
                    var ErrType = err.errmsg;
                    if(ErrType.indexOf("duplicate") > -1){
                        if(ErrType.indexOf("email") > -1){
                            err = {
                                email : "DUPLICATED"
                            }                                
                        }                    
                        return res.json( 500, err);
                    }
                    else{
                        return res.json(500, {
                            error: true
                        });
                    }
                }
            });
        })
    }

        
}
export function addOrUpdateUser(req,res){
    console.log('PUT - /api/user/:id',req.params.id, req.body);
    if(req.params.id == 0){
        createUser(req,res);
    }else{
        putUser(req,res);
    }
}
export function  deleteUser(req,res){
    console.log('PUT - /api/delete/:id',req.params.id);
    User.remove({ _id: req.params.id }, function(err) {
        if (err) {
            return res.json(500, {
                error: true
            });
        }
        else {
            return res.json(200);
        }
    });
}