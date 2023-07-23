import jwt from "jsonwebtoken";
import users from "../Models/users.js";
export const requiresign= (req,res,next)=>{

    try {
        const decode= jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next();
        
    } catch (error) {
        console.log(error);
        
    }

}

//for admin 
 export const isadmin =async(req,res,next)=>{
    try {
        const user=await users.findOne(req.email)
        if(user.role!==1){
            return res.status(401).send({
                sucess:false,
                message:"unauthorised access"
            })
        }
            else{
                next();
            }

        
    } catch (error) {

       console.log(error)
       res.status(401).send({
        sucess:false,
        error,
        message:"error in admin milldleware"
       })
        
    }

}