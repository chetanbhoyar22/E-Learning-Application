var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { register,getAllUser,getUserbyId,getUser,removeUser,updateUser,login } = require("../controller/userController");

//Register User
router.post("/createuser",    //http://localhost:4000/api/createuser
[
    check("name", "Name Should Be At Least 3 Character").isLength({ min: 3 }), // form validation
    check("email", "Your Entered Wrong Email-ID ").isEmail(),  // check  email validation
    check("password", "Password Should Be At Least 3 Character").isLength({ min: 3 }),  // check  password validation
    check("mobile", "Mobile-No. Should Be 10 Digits").isLength({ min: 10 }), // check  mobile validation
    check("address", "Address Should Be At Least 5 Char").isLength({ min: 5 }), // check  address validation
],
  register
);
//GetAllUser
router.get("/getallusers/",getAllUser); //http://localhost:4000/api/getallusers
router.param("userId", getUserbyId); //param : parameter
//Find UserById
router.get("/userbyid/:userId", getUser)  //http://localhost:4000/api/userbyid/
//Remove User
router.delete("/removeuserbyid/:userId",removeUser); //http://localhost:4000/api/removeuserbyid/
//Update User 
router.put("/updateuserbyid/:userId", updateUser); //http://localhost:4000/api/updateuserbyid/
//Login User
router.post("/login",         //http://localhost:4000/api/login
  [
    check("email", "Email Is Required").isEmail(),
    check("password", "Password Is Required").isLength({ min: 3 })
  ],
  login
);


module.exports = router;
