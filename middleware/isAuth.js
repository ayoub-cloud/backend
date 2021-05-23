const User = require("../models/User");
const jwt= require("jsonwebtoken");
const { model } = require("mongoose");

const isAuth= async(req, res, next)=>{
try {
    //  import token
//  headers=> Authorization
const token= req.headers["authorization"];
//  si nest pas token
if (!token) {
    return res
    .status(401)
    .send({errors:[{msg:"you are not authorized1"}]});

}
//  you are not authorized
// on doit verifier si token est valide
const decoded = jwt.verify(token, process.env.SECRET_KEY);
// test if the user exist with that id
const user = await User.findOne({_id:decoded.id})
// you are not authorised
if (!user) {
    return res
    .status(401)
    .send({errors:[{msg:"you are not authorized2"}]});
}
 
// si non 
// req to add user
req.user = user;
// next
next();
    
} catch (error) {
   res.status(401).send({errors:[{msg:"you are not authorized"}]});
}
};

model.exports =isAuth;