const mongoose = require('mongoose')

var schema = new mongoose.Schema({
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
        type:Number,
        required:true

    }
})
// var Attendance_schema = new mongoose.Schema({
//     at:{
//         type: Boolean,
//         required:true
//     },
//     status:{
//         type:Number
//     }
// })
// var schema2 = new mongoose.Schema({
//     username: {
//         type : String,
//         required :true,
//         unique: true
//     },
//     password:{
//         type : String,
//         required: true
//     }
// })
const Userdb = mongoose.model('userdb',schema);
// const teacher_login = mongoose.model('teacher_login',schema);
module.exports = Userdb;
// module.exports = teacher_login;

