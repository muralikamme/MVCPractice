var conn=require("../db")

var gettingdata=()=>{

    return new Promise((resolve, reject) => {

        conn.query("select * from users",(err,data)=>{
            if(err){
               reject (err)
            }else{
                resolve (data)
            }
        })
    })


}

module.exports={
    gettingdata
}


//     conn.query("select * from users",(err,data)=>{
//         if(err){
//             return err
//         }else{
//             return data
//         }
//     })
// }

// module.exports={
//     gettingdata
// }