const express = require('express');
const app=express();

const PORT=process.env.port||5000;
const mongoose  = require('mongoose');
const {atlasUrl}=require('./keys');

const cors=require('cors')
app.use(cors())
require('./models/models');
require('./models/post' )
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/createPost'));

mongoose.connect(atlasUrl);

mongoose.connection.on("connected",()=>{
    console.log("connected");
})
mongoose.connection.on("error",()=>{
    console.log("not connected");
})



app.listen(PORT,()=>{
    console.log("server is running on " + PORT)
})