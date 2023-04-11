import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    title : {
        type : String,
        required : true,
    },
    bio : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now,
    }
})
const userModel = mongoose.model('userModel',userSchema);
export default userModel;