import  Jwt from "jsonwebtoken";

export const VerifyJWT = async (req,res,next) =>{
    try {
        let  token = req.header("Authorization");
        if(!token){
            return res.status(403).json({msg:"You need to log in First"})
        }
        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }
        const  verified = Jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = verified
        next()
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}