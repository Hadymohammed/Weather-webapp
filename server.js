let projectData=[];

// import needed modules
const http =require('http');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fetch=require('node-fetch');

// create an instance of app
const app=express();
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initializing the main project folder 
app.use(express.static('website'));

const port=8000;
app.listen(port,(req,res)=>{
    console.log(`server running in port : ${port}`);
});

//Initializing GET route
app.get('/all/:city',async (req,res)=>{
    const city=req.params.city;//get city name from client side
    const apiKey='cefa903d59215f0aae790cb5f1c514c1';
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(baseURL);
    const fetchedData=await fetch(baseURL);
    const json = await fetchedData.json();
    console.log(`request with city : ${city} from server`);
    //console.log(json);
    res.json(json);
});

//Initializing POST route
app.post('/all',async (req,res)=>{
    projectData.push(req.body);
    console.log(projectData);
})
