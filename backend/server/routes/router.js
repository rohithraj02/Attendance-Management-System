const express= require('express');
const route=express.Router()
const services=require('../services/render');// Uses render.js file for the routes
const controller = require('../controller/controller');
route.get('/',services.homeRoutes);

//     // console.log('Request for home recieved');
//     res.render('index');
//     // res.sendFile(path.join(__dirname,'../index.html'));
// })
const axios = require('axios');
route.get('/teacher',(req,res)=>{
    res.render('teacher');
});
route.get('/add_user',(req,res)=>{
    res.render('add_user');
});
route.get('/Admin',(req,res)=>{
    //make request to /api/users
    axios.get('http://localhost:8080/api/users')
    .then(function(response){
        console.log(response)
        res.render('Admin',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
});
route.get('/student',(req,res)=>{
    res.render('student');
});
//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.delete('/api/users/:id',controller.delete);
module.exports= route