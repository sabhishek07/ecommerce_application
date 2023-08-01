import slugify from "slugify";
import products from "../Models/products";

import fs from 'fs';

export const createproductController=async(req,res)=>{
    try{
    const{name,description,category,slug,quantity,price,shiping}=req.fields;
    const{photo}=req.files;
    if(!name||!description||!slug || !quantity || !price ||!category ){
        res.status(500).send({
            message:"all fields are required"
        })
    }
        if(photo && photo.size>10000000){
            res.status(500).send({
                message:"file should not be more than 10 mb"
            })
        }
        const products= new products({...fields,slug:slugify(name)})
        if(photo){
            products.photo.data=fs.readFileSync(photo.path)
            products.photo.contentType=photo.type
        }
        await products.save();
        res.satus(201).send({
            success:true,
            message:"product created successfully",
            products
        })

 
    }


catch(error){
    console.log(error)
    res.satus(500).send({
        success:false,
        message:"error in while creating products"
    })

}
  
}
//get all product
export const getallproductController=async(req,res)=>{
    try {
        const getProduct=await products.find({}).select("-photo").limit(12).sort({createdAt:-1})
        req.status(200).send({
            success:true,
            message:"get all products",
            getProduct
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error while fetching al products",
            error
        })
        
    }

}
//get single product
export const singleProductController=async(req,res)=>{
    try {
        const{id}=req.params;
        const singleProduct=await products.findOne({id}).select('-photo').populate("category")
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"not getting products"
        })
        
    }

}
//getproductphoto
export const PhotoProductController=async(req,res)=>{
    try {
        const{pid}=req.params;
        const photoUpdate=await products.findById({pid}).select("photo")
        if(photoUpdate.photo.data){
            res.set('Content-Type',photoUpdate.photo.contentType)
            res.status(200).send(photoUpdate.photo.data)

        }
        
    } catch (error) {
        conole.log(error)
        res.status(500).send({
            success:false,
            message:"not getting photo"
        })
        
    }
   
    

}

//delete product
export const deleteProductController=async(req,res)=>{
    try {
        const{pid}=req.params;
        await products.findByIdAndDelete(pid).select("-photo")
        res.status(200).send({
            success:true,
            message:"product delete succesfully"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success:false,
                message:"error while deleting"
            }
        )
    }

}

//update product
export const UpdateproductController=async(req,res)=>{
    try{
        const{name,description,category,slug,quantity,price,shiping}=req.fields;
        const{photo}=req.files;
        if(!name||!description||!slug || !quantity || !price ||!category ){
            res.status(500).send({
                message:"all fields are required"
            })
        }
            if(photo && photo.size>10000000){
                res.status(500).send({
                    message:"file should not be more than 10 mb"
                })
            }
            const{pid}=req.params
            const products= await products.findByIdAndUpdate(pid,{...fields,slug:slugify(name)},{new:true})
            if(photo){
                products.photo.data=fs.readFileSync(photo.path)
                products.photo.contentType=photo.type
            }
            await products.save();
            res.satus(201).send({
                success:true,
                message:"product updated successfully",
                products
            })
        }
        catch(error){
            console.log(error)
            res.satus(500).send({
                success:false,
                message:"error in while creating products"
            })

}
}