const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    // sl:{
    //     type: Number,
    //     required : true
    // },
    name : {
        type : String,
        required :true
    },
    usn:{
        type : String,
        required: true,
        unique: true
    }
})
const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;