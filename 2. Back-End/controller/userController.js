const User = require("../model/userModel");
const { check, validationResult } = require("express-validator");
// var jwt = require("jsonwebtoken");
// var expressJwt = require("express-jwt");

//regiseter user
exports.register = (req, res) => 
{
    const errors = validationResult(req);
  
    if (!errors.isEmpty())
     {
      return res.status(422).json({
        error: errors.array()[0].msg
      });
    }

    const user = new User(req.body);
   
    user.save((error, userData) => 
    {
      
        if (error) 
      {
        return res.status(400).json({
          error: "Not Able To Save User In DB - Email Already Exist !"
        });
      }
      
      res.json({
        name: userData.name,
        email: userData.email,
        mobile: userData.mobile,
        address: userData.address,
        password: userData.password,
        id: userData._id
      });
    });
  };

  // to read all user
  exports.getAllUser = (req, res) => 
  {
    
    User.find().exec((error, userData) => 
    {
      if (error) {
        return res.status(400).json({
          error: "No User Found"
        });
      }

      res.json(userData);
    });
  };

    //to find user
    exports.getUserbyId = (req, res, next, id) => 
     {
        User.findById(id) 
        .exec((error, userData) => 
            {
                if (error) {
                return res.status(400).json({
                error: "User Not Found"
            });
      }

      req.user = userData;  //global variable 

      next();
    
    });
  };

  //to find user byId
  exports.getUser = (req, res) => 
{
    return res.json(req.user);
 
};
  
      //to remove user byuserId
     exports.removeUser = (req, res) =>
      {
        const user = req.user;
 
         user.remove((error, user) => {
     if (error) {
       return res.status(400).json({
         error: "Failed To Delete This User"
       });
     }
     res.json({
       message: "Successfully Deleted"
     
     });
   });
 }
 //to update user
 exports.updateUser = (req, res) => 
 {
    const user = req.user;
    user.name = req.body.name;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.address = req.body.address;
    user.password = req.body.password;
    
     
       user.save((error, updatedUser) => {
         if(error) {
           return res.status(400).json({
             error: "Failed To Update User"
           });
         }
         res.json(updatedUser);
       });
    };

 //login user
 exports.login = (req, res) => 
 {
    const { email, password } = req.body;

    const errors = validationResult(req);
  
    if (!errors.isEmpty())
     {
      return res.status(422).json({
        error: errors.array()[0].msg
      });
    }
    
    User.findOne({ email }, (error, user) => 
    {
      if (error || !user) {
        return res.status(400).json({
          error: "User Email Does Not Exists"
        });
      }
  
      if (!user.autheticate(password)) {
        return res.status(401).json({
          error: "Email And Password Does Not Match"
        });
      }

      const { _id, name, email, mobile, address } = user;
      return res.json({ _id, name, email, mobile, address} );
    
     });
  };
 
   