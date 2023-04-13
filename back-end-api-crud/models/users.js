import mongoose from "mongoose";
import uuid from "react-uuid";
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  creationId : {
    type : String,
    default : uuid(),
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const userModel = mongoose.model("userModel", userSchema);
export default userModel;