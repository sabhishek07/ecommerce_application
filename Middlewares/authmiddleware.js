import jwt from "jsonwebtoken";
export const requiresign= async (req,res,next)=>{

    try {
        const decode=await jwt.verify(req.header.authorization,process.env.JWT_SECRET)
        next();
        
    } catch (error) {
        console.log(error);
        
    }

}