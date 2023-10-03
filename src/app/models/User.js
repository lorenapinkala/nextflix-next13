import mongoose from "mongoose";
//const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    //required: true,
    //unique: true,
  },
  password: {
    type: String,
    //required: true,
  },
  userStatus: {
    type: Boolean,
    default: true,
  },
  favorites: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  salt: {
    type: String,
  },
 
});

// UserSchema.pre("save", function () {
//   this.salt = bcrypt.genSaltSync();
//   this.password = bcrypt.hashSync(this.password, this.salt);
// });


export const UserModel = mongoose.model("User", UserSchema);