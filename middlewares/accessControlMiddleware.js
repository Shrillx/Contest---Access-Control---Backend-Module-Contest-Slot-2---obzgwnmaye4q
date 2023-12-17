const accessControlMiddleware = (req,res,next)=>{
    const userRole= req.decoded ? req.decoded.role: null;

    if(userRole !== 'admin'){
        return res.status(403).json({message: 'Permission denied. Admin role required.'})
    }
    next();
}

module.exports = accessControlMiddleware; 