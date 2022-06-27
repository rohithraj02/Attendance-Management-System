const URI='mongodb+srv://rohithraj02:risroh2010@cluster0.boaax0e.mongodb.net/?retryWrites=true&w=majority'
// const mongoose= require('mongoose');
// const connectDB=async()=>{
//     try{
//         //mongodb connection string
//         const con=await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrIParser:true,
//             useUnifiedTopology:true,
//             useFindAndModify:false,
//             useCreateIndex:true
//         })
//     console.log('MongoDb connected:'+con.connection.host);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }
const mongoose = require('mongoose')


const connectDB={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(URI,connectDB)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
module.exports = connectDB