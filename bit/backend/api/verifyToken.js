const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); 


module.exports = function (req,res,next){
    const SECRET_KEY = 'fkdsjlkfjdkNKJHRKSJHK';
    const token=req.headers['auth_token'];
    if(!token) {
        return res.status(400).json({
            message:'Please login first!'
        })
    }
        try {
            const verified =jwt.verify(token,SECRET_KEY);
            req.user = verified;
            next();
        }
        catch (err) {
            res.status(401).json({message:'Authentication Failed'});
        }
}