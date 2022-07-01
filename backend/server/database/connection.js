const mongoose = require('mongoose')

const url = `mongodb+srv://rohithraj02:risroh2010@cluster0.boaax0e.mongodb.net/?retryWrites=true&w=majority`;
function connectDB(){
const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}
module.exports(connectDB)