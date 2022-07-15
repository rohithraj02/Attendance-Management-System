const mongoose = require('mongoose')

var Atschema = new mongoose.Schema({
    // sl:{
    //     type: Number,
    //     required : true
    // },
    name : {
        type : String,
        required :true,
        uppercase:true
    },
    usn:{
        type : String,
        required: true,
        unique: true,
        uppercase:true
    },
    present:{
        type:Number
    }
})

const At = mongoose.model('At',schema);
// const teacher_login = mongoose.model('teacher_login',schema);
module.exports = At;