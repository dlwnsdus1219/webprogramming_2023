import express from "express";
import mongoose from 'mongoose'
const app = express();

mongoose.
connect(
    'mongodb+srv://dlwnsdus1219:qF3jMdu07uHoosCY@cluster0.hnm6ffi.mongodb.net/Blog?retryWrites=true&w=majority'
)
.then(()=>app.listen(5000))
.then(()=>
    console.log("Connected to Database and listening to LocalHost 5000")
)
.catch((err)=>console.log(err)); 


//password: qF3jMdu07uHoosCY