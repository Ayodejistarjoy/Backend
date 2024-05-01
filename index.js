const { config } = require('dotenv');
const express = require('express');
require('dotenv'),config();
let port = process.env.PORT;
const app = express();
const userRouter = require("./Routes/User.Route");
 const mongoose = require("mongoose")
 const cors = require("cors")
 app.use(cors())
 

 let Uri = "mongodb+srv://ayodejialao0:Ayo123joy@cluster0.yosamsh.mongodb.net/march_db?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json({limit:"100mb"}))
app.use("/student", userRouter)
app.use(express.urlencoded({extended:true, limit:"100mb"}))




app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    mongoose.connect(Uri)
 .then(()=>{
     console.log("connected to database");
 })
 .catch((err)=>{
     console.log(err);
  })
})