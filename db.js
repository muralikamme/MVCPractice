
var mysql2=require("mysql2")

require("dotenv").config();


var conn=mysql2.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})


conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
   console.log("database connected");
    }

})


module.exports=conn
