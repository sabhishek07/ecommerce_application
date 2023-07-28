import categories from "../Models/categories";
import slugify from "slugify";

export const createCategoryController =async(req,res)=>{
    try {
        const{name}=req.body;
        if(!name){
            return res.status(401).send({
                message:"name is required"
            })
            const existname=await categories.findOne({name})
            if(existname){
                return res.status(200).send({
                    success:false,
                    message:"name already exist"
                })
            }
          
            const category=await new categories({
                name,
                slug:slugify(name)
            }).save()

            res.status(201).send({
                success:true,
                message:"categroy create successfully",
                category
            })
        


            
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in category"
        })
    }

}

///update category
export const updatecategroyController=async()=>{
    try {
        const{name}=req.body;
        const{id}=req.param;
        const update=await categories.findByIdAndUpdate(id,{name,slug:slugify(name),new:true})
        res.status(201).send({
            success:true,
            message:"update successfully",
            update
        })
        
    } catch (error) {
        console.log(error)
         res.status(500).send({
            success:false,
            message:"error in update "
         })
    }
}

//delete
export const deletecategroyController=async()=>{
    try {
        const{id}=req.params;
       await categories.findByIdAndDelete(id)
        res.status(201).send({
            success:true,
            message:"Delete successfully",
           
        })
        
    } catch (error) {
        console.log(error)
         res.status(500).send({
            success:false,
            message:"error in deleting "
         })
    }
}
//get all categories
export const getallcategoryController=async()=>{

    try {
        const getallcategory=await categories.find({})
        res.status(200).send({
            success:true,
            message:"get categories",
            getallcategory
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in fetching all categories"
        })
        
    }

}
//getsingle categories
export const getSinglecategoryController=async()=>{

    try {
        const {id}=req.params
        const getSinglecategory=await categories.find({id})
        res.status(200).send({
            success:true,
            message:"get category",
            getSinglecategory
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in fetching single categories"
        })
        
    }

}