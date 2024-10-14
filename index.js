var express=require("express")

var app=express()

var mysql2=require("mysql2")



var conn=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Murali@339",
    database:"fristdata"
})


conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
   console.log("database connected");
    }

})

app.get("/",(req,res)=>{

    res.send("hello")

})
var port=0;

app.listen(port,()=>{
    console.log(`localhost:${port}`);
})