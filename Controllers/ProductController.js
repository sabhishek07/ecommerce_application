import slugify from "slugify";
import products from "../Models/products";
import products from "../Models/products";
import fs from 'fs';

export const createproductController=async()=>{
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