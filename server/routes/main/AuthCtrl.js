import * as  jwt from 'jsonwebtoken';

import {superAdmin, secret} from '../../kernel/config/settings';
import {User} from '..';


export function login(req, res) {
    if (req.body.email === superAdmin.email && req.body.password === superAdmin.password) {
        const token = jwt.sign(superAdmin, secret, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        }, (err, token) => {
            if (err)
                return res.send(500);
            return res.json({token, user: superAdmin});
        });

    } else {
        console.log('user', req.body);
        /***Verify User in database***/
        return User
            .findOne({email: req.body.email})
            .exec(function (err, user) {
                if (err) {
                    console.log('ERROR', err);
                    return res.status(500);
                }

                if (!user) {
                    return res.status(404).end('Email not found');
                }
                else if (!user.validPassword(req.body.password)) {
                    return res.status(401).end('Wrong email or password');
                }
                else {
                    const _user = user.lean;
                    const token = jwt.sign(_user, secret, {
                        expiresIn: 1440 * 60// expires in 24 hours
                    });
                    return res.json({token, user: _user});
                }
            })
    }
}

export function logout(req, res) {
    AuthCtrl.expireToken(req.headers, function (err, success) {
        if (err) {
            console.log('err logout...', err);
            return res.sendStatus(401);
        }

        if (success) {
            res.sendStatus(200);
        }
        else res.sendStatus(401);
    });
}

export function ensureAuthorizedApi(req, res, next, routes) {
    let token;
    try {
        token = req.headers['token'];
        console.log('token', token);
        if (token) {
            jwt.verify(token, secret, (err, decode) => {
                if (err) {
                    res.status(401);
                } else {
                    next();
                }

            })
        } else {
            return res.sendStatus(401);
        }
    } catch (err) {
        return res.sendStatus(401);
    }
}
