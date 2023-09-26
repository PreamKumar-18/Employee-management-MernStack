const express = require("express");
const app = express();
const mongoose = require("mongoose")
const morgan = require("morgan");
const cors = require("cors");


app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// app.use("/",(req,res) =>{
//     res.json("Hello World");
    
// })

const infoRouter = require("./router")
app.use("/info",infoRouter)

app.listen(5000,() =>{
    console.log("Server Started On 5000")
})

mongoose.connect("", (err) => {
    if(!err){
        console.log("DB Connected Successfully")
    }
}

)
   



