import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectiondb = async ()=>{

    try {
        const connect=await mongoose.connect(process.env.MONGO_DB)
        console.log(`connection to database`)

        
    } catch (error) {
        console.log(`error in mongod ${error}`)
        
    }

}

export default connectiondb;