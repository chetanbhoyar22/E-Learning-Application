var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 64,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    mobile: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      maxlength: 100,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

userSchema.methods = 
{
  autheticate: function(plainpassword) 
  {
    return plainpassword === this.password;
  },
};
module.exports = mongoose.model("User", userSchema);
