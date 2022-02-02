const express = require('express');
const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to Nodejs Framework!!!")
});

app.listen(5000)