const express = require('express');
const app=express();
// const cors=require('cors')
const PORT=process.env.port||5000;
const atlasUrl=require('./keys');
const mongoose  = require('mongoose');
require('./models/models');
app.use(express.json());
app.use(require('./routes/auth'));

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