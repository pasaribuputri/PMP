import express from "express";
import {client} from './server.js'

const app = express();

// middleware

app.use((req,res,next) =>{
    console.log("ada request masuk");
    console.log(req.url); //untuk mencetak request
    next();
})

// route 

app.get("/api/putri", (req,res)=>{
    res.send("Putri Mulyani")
})

app.get("/api/data",async (req,res)=>{
    res.send((await client.query("select * from mahasiswa")).rows)
})

app.listen(3000, ()=>{
    console.log("server running at port 3000")
})