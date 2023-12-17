const accessControlMiddleware = (req,res,next)=>{
    const userRole= req.decoded ? req.decoded.role: null;

    if(userRole !== 'admin'){
        return res.status(403).json({message: 'Unauthorized Access'})
    }
    next();
}

module.exports = accessControlMiddleware; 