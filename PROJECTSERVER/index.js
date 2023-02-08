// import cors

const cors = require('cors')


//import dataservice fill from service folder
const dataservice=require('./service/dataService')
// import express
const { json } = require('express')
const express = require('express')





// create app

const app = express()


// connect frontend

app.use(cors({origin:'http://localhost:4200'}))

// to convert json datas
app.use(express.json())





// request

// GET

// app.get('/',(req,res)=>{
//     res.send('GET Method checking')
// })


// register

app.post('/register',(req,res)=>{

   dataservice.register(req.body.email,req.body.uname,req.body.pswd).then(result=>{
    res.status(result.statusCode).json(result)
   })
   
    
    
    // console.log(req.body);
})

// login
app.post('/login',(req,res)=>{

    const result=dataservice.login(req.body.uname,req.body.pswd).then(result=>{
        res.status(result.statusCode).json(result)

    })
  
    
    
    // console.log(req.body);
})



app.post('/book',(req,res)=>{
    dataservice.book(req.body.name,req.body.email,req.body.phone,req.body.date,req.body.time,req.body.nop).then(result=>{
        res.status(result.statusCode).json(result)
    })
})




// set port

app.listen(3003,()=>{
    console.log("listening on port 3003");
})
