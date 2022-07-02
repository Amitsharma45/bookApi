const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routers/Bookrouter')
const bodyParser =require('body-parser')
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
//  BodyParser url encoder.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//  Server Router
app.use('/api',router)

// to connect server with mongoDB
mongoose.connect("mongodb+srv://mongoadmin:amit1234@cluster0.ny6ohvf.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (err) => {
    console.log(err);
});
let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Server is running at 3000');
})