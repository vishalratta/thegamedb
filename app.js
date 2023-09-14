const express = require('express');
const route = require('./route')
const { connect, connection } = require('mongoose');
  
const app = express();
const PORT = 3000;


connect('mongodb+srv://mendiratta2000:mendiratta@nftmarketplace.pf01l6q.mongodb.net/test');

const mongodbconfig = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
connection.on('connected', () => console.log('Database is Connected Succesfully'));

connection.on('connection', () => console.log('Error is Occuring on Database'));

// const uri = `mongodb://${process.env.DB_HOST}/${process.env.DATABASE_NAME}`
// connect(uri, mongodbconfig).catch(error => {
//     logger.error("Error is Occuring on Database")
// });


app.use('/apis', route);
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});


app.post 






  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);