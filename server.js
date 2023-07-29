import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectiondb from "./config/db.js";
import authroutes from "./Routes/authroutes.js";
import category from './Routes/category.js';
import productroutes from './Routes/productroutes.js'
import cors from  'cors';


dotenv.config();

connectiondb();

const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
app.use('/api/v1/auth',authroutes);
app.use('/api/v1/category',category);
app.use('/api/v1/product',productroutes)


app.get('/',(req,res)=>{
    res.send({
        message:"all okay"
    })

})
const PORT=process.env.PORT || 8080

app.listen(PORT,(req,res)=>{
    console.log(`port running on${PORT}`)
})