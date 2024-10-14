var express=require("express")

var app=express()

app.get("/",(req,res)=>{

    res.send("hello")

})
var port=0;

app.listen(port,()=>{
    console.log(`localhost:${port}`);
})