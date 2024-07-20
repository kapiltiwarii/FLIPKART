let express = require('express')
let app = express()
app.get("/",(req,res)=>{
    res.send("kapil")
})
app.listen(4000,()=>{
    console.log("server started");
})