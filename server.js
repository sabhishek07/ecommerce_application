import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectiondb from "./config/db.js";
import authroutes from "./Routes/authroutes.js";


dotenv.config();

connectiondb();

const app=express();


app.use(express.json());
app.use(morgan('dev'))
app.use('/api/v1/auth',authroutes);


app.get('/',(req,res)=>{
    res.send({
        message:"all okay"
    })

})
const PORT=process.env.PORT || 8080

app.listen(PORT,(req,res)=>{
    console.log(`port running on${PORT}`)
})