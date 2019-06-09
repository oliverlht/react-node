const express = require('express');
const utility = require('utility');
const Router = express.Router();
const Model = require('./model');
const User = Model.getModel('user');
const _filter = '-pwd -__v';

function md5Pwd(pwd){
    const salt = 'kl;sjdaflkjdklfjoiop[]';
    let newPwd = utility.md5(pwd+salt);
    return newPwd
}

Router.get('/info',function(req,res){
    const {userId} = req.cookies;
    console.log(userId)
    if(!userId){
        res.json({code: 1})
    }else{
        User.findOne({_id:userId},_filter,function(err,doc){
            if(err){
                res.json({code:1,msg:'服务器出错'});
            }else{
                res.json({code: 0,data: doc})
            }
        })
    }
})

Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
})

Router.post('/register',function(req,res){
    console.log(req);
    const {user,pwd,type} = req.body;
    User.findOne({user},function(err,doc){
        if(doc){
            res.json({code:1,msg:'用户名已经存在'})
        }else{
            const userModel = new User({user,type,pwd:md5Pwd(pwd)});
            userModel.save(function(e,d){
                if(e){
                    res.json({code:1,msg:'服务器出错'});
                }else{
                    const {user,type,_id} = d;
                    res.cookie('userId',_id);
                    res.json({code:0,data:{user,type,_id}});
                }
            });
        }
    })
})

Router.post('/login',function(req,res){
    // console.log(req);
    const {user,pwd} = req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            res.json({code:1,msg:'用户名或密码错误'})
        }else{
            res.cookie('userId',doc._id);
            return res.json({code:0,data:doc})
        }
    })
})

module.exports = Router; 