const express = require ("express")
const connectDB = require("./config/connectDB")
const app = express()
//const mongoose = require ("mongoose")

//middleware
app.use(express.json())

//connect to database
connectDB()
app.use("/api/auth",require("./routes/auth"))
app.use("/api/art",require("./routes/art"))

const port=5001
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server running on port ${port}`)
})