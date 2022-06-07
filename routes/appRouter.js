const express = require('express');
const app     = express();

app.get('/log',(req,res)=>{
    res.send("Hello welcome i am docker file");
});
module.exports = app;