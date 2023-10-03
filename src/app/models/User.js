import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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

UserSchema.pre("save", function () {
  this.salt = bcrypt.genSaltSync();
  this.password = bcrypt.hashSync(this.password, this.salt);
});




const UserModel =   mongoose.models.User|| mongoose.model("User", UserSchema);

export default UserModel;