const express= require('express');
const route=express.Router()
// const services=require('../services/render');// Uses render.js file for the routes
const controller = require('../controller/controller');
const fs = require('fs');
// const login_controller=require('../controller/login_controller')
route.get('/',(req,res)=>{
    res.render('index');
});
const axios = require('axios');
// const teacher_login = require('../model/model');
route.get('/teacher',(req,res)=>{
    res.render('teacher');
});
route.get('/admin_login',(req,res)=>{
    res.render('admin_login');
});
route.get('/add_user',(req,res)=>{
    res.render('add_user');
});
route.get('/delete_user',(req,res)=>{
    res.render('delete_user');
});
// console.log(users:response.data);
route.get('/Admin',(req,res)=>{
    //make request to /api/users
    axios.get('http://localhost:8080/api/users')
    .then(function(response){
        // console.log(response.data);
        // resp=response.data;
        res.render('Admin',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
});
route.get('/student',(req,res)=>{
    axios.get('http://localhost:8080/api/users')
    .then(function(response){
        // console.log(response)
        res.render('student',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
});

route.get('/update_user',(req,res)=>{
    axios.get('http://localhost:8080/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        // console.log(userdata)
        res.render('update_user',{user:userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })
});
route.get('/student-page',(req,res)=>{
    res.render('student-page');
});
route.get('/mark_att',(req,res)=>{
    axios.get('http://localhost:8080/api/users')
    .then(function(response){
        res.render('mark_att',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
});
//API
route.post('/api/users',controller.create);
route.get('/api/users/',controller.find);
route.put('/api/users/:id',controller.update);
// route.put('/api/users/updateCount/:id',controller.updateCount);
route.delete('/api/users/:id',controller.delete);
// route.post('/api/teachers',teacher_login.create);
module.exports= route