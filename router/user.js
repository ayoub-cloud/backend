const express = require("express")
const { Register,Login} = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const { validation,registerValidate, loginValidate  } = require("../middleware/validateUser");

const router = express.Router();

Router.get("/",(req,res)=> {
    res.send("testing router");
});

/* 
@method: POST
 @ path:localhost:5000/api/user/register
 @ parameter: req.body
 public
 */
router.post("/register",registerValidate(), validation,Register);



/* 
@method: POST
 @ path:localhost:5000/api/user/login
 @ parameter: req.body
 public
 */
 router.post("/login",loginValidate(), validation,Login);

 /* 
@method: GET
 @ path:localhost:5000/api/user/current
 @ parameter: req.headers
 public
 */
 router.get("/current",isAuth, (req,res)=>{
     res.send({msg:"authorized", user:req.user});
 });


// default export
module.exports = router;
 