import jwt from "jsonwebtoken";


export const requiresign=(req,res,next)=>{

    try {
        const decode=jwt.verify(req.header.authorization,process.env.JWT_SECRET)
        next();
        
    } catch (error) {
        console.log(error);
        
    }

}