let projectData={};
// import needed modules
const http =require('http');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
// create an instance of app
const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initializing the main project folder 
app.use(express.static('website'));
const port=8000;
app.listen(port,(req,res)=>{
    console.log(`server running in port : ${port}`);
})


