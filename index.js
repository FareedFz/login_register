const express = require('express');
const app = express();
const router = require('./routes/appRouter');


app.use('/user',router)
app.listen(5206,()=>{
    console.log("server running on  this  port connection 5206");
    
})
