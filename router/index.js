var express=require("express")

var app=express()

//import the controller 

var {users}=require("../controller/index")



var router=express.Router()


router.get("/users",users)



module.exports=users