const express = require("express");
const app = express();
const mongoose  =require("mongoose");
const dotenv  = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")


const uri = process.env.Mongo_URI;
mongoose.connect(uri , { useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established succesfully");
})
app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/users",userRoute);
app.listen(8800,()=>{
    console.log("backend is running");
})