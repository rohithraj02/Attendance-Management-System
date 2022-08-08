var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res)=>{
//validate request
if(!req.body){
    res.status(400).send({message: "Content cannot be empty"});
    return;
}
//new user
const user = new Userdb({
    // sl: req.body.sl,
    name:req.body.name,
    usn:req.body.usn,
    present:0,
    total:0
    // status: req.body.status
})

//save user in the database
user.save(user)
.then(data=>{
    // res.send(data);
    res.redirect('/add_user')
})
.catch(err =>{
    res.status(500).send({message:err.message || "some error occured"})
});
}
//retrieve and return all users/ retrieve and rteturn a single user
exports.find = (req,res)=>{
if(req.query.id){
    const id=req.query.id;
    Userdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: " User with "+id+" not found"})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error retrieving user with id"})
    })
    }
else{
    Userdb.find({}).sort({usn:1})
    .then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message : err.message || "Error Occured while retrieving info"})
    })
    }
}
exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})
    }
    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message: 'Cannot update user with ${id}. Maybe user not found!'})
        }
        else
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message: "Error update user information"})
    })
}


//delete a user with specified user id
exports.delete = (req,res)=>{
const id = req.params.id;
Userdb.findByIdAndDelete(id)
.then(data=>{
    if(!data){ 
    res.status(404).send({message: "Cannot Delete with id"+id+ " Maybe id is wrong"})
    }else{
        res.send({
            message: "Student deleted successfully!"
        })
    }

})
.catch(err=>{
    res.status(500).send({
        message: "Could not delete student with id = "+id
    });
});
}

