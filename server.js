// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const http =require ('http')
const express = require('express')
const bodyParser = require('body-parser');
const { compileFunction } = require('vm');

const app = express()
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

app.post ('/postreq' , function (req,res)  {


    projectData=req.body;
 
    res.send(projectData)

    
}) 

app.get ('/getreq' , function (req,res)  {


    console.log(projectData);
 
    res.send(projectData)

    
}) 

// Setup Server
app.listen(3000, () => console.log('work fine'))