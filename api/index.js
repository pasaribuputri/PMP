import express from "express";

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

app.listen(3000, ()=>{
    console.log("server running at port 3000")
})