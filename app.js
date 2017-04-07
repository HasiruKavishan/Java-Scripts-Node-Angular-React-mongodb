/**
 * Created by hasiru on 4/1/17.
 */
const express = require('express');
const path= require('path');
const app = express();
const port=process.env.PORT ||3000;
const user = require('./routes/users');

app.use(express.static(path.join(__dirname, "public")));




app.get("/",function(req,res){
    res.send("hello world");
});

app.listen(3000,()=> {
    console.log("listining the port 3000");
});