const express=require('express'); //we are importing express module
const path=require('path');
const fs=require('fs');
const app=express();//to access express
const port=3000;

app.use('/static',express.static('static'))
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
//THE PORT INFORMATION 
app.listen(port,()=>{
    console.log("THE APPLICTION IS RUNNING");
})