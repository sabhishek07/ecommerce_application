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
        console.log(errpr)
        res.status(500).send({
            sucess:false,
            message:"error in category"
        })
    }

}
