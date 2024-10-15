var express=require("express")

var app=express()

//import the router module

var router=require("./router/index")


//middleware

app.use("/api",router)

app.get("/",(req,res)=>{
    res.send("code is working")
})

//import dotenv module
require("dotenv").config();
console.log(process.env);

var port=process.env.port;


//connect to  port

app.listen(port,()=>{
    console.log(`localhost:${port}`);
})