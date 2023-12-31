import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true  
    },
    price:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.ObjectId,
        ref:'category'
    },
    quantity:{
        type:String,
        required:true

    },
    photo:{
        data:Buffer,
        contentType:String
    },
    shipping:{
        type:Boolean
       

    }


},{timestamps:true})

export default mongoose.model('products',ProductSchema);