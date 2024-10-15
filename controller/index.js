
var {gettingdata}=require("../models/index")


var users= async  (req,res)=>{


    var data= await gettingdata()
    
    if(data){
        res.send(data)
    }else{

    

    res.send("Yes i am working with MVC")
    }

}

module.exports={
    users
}