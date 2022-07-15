var Atdb = require('../model/At');

//create and save new user
exports.create = (req,res)=>{
//validate request
if(!req.body){
    res.status(400).send({message: "Content cannot be empty"});
    return;
}
//new user
const Att_det = new Atdb({
    // sl: req.body.sl,
    name:req.body.name,
    usn:req.body.usn,
    present:req.body.present
    // status: req.body.status
})
//save user in the database
Att_det.save(Att_det)
.then(data=>{
    // res.send(data);
    res.redirect('/mark_att')
})
.catch(err =>{
    res.status(500).send({message:err.message || "some error occured"})
});
}
