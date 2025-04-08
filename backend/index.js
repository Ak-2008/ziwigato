require ('dotenv').config();
const express=require('express')
const app=express();
const port=process.env.PORT || 5000;


const mongoDB=require("./db")

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
app.use("/api",require("./Routes/createUser"));
app.use("/api",require("./Routes/DisplayData"));
app.use("/api",require("./Routes/OrderData"));
app.get('/',(req,res)=>{
    res.send("hi bro");
    })
app.listen(port,()=>{
    console.log("server started");
})
