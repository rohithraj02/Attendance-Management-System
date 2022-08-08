const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:__dirname+'/.env'});
const morgan=require('morgan');
const bodyparser=require("body-parser");
const path=require("path");
const { appendFileSync } = require('fs');
const mongoose = require('mongoose')

const url = `mongodb+srv://rohithraj02:risroh2010@cluster0.boaax0e.mongodb.net/?retryWrites=true&w=majority`; //MongoDb connection url
const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}//db connection 
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    //end of db connection
const app=express();
dotenv.config({path:'config.env'})
const PORT= process.env.PORT || 8080
app.use(morgan('tiny'))
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))
//set view engine
app.set("view engine","ejs")
//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
//load routers
app.use(require('./server/routes/router'))
app.listen(PORT,()=>{console.log('Server is running on http://localhost:'+PORT)});
