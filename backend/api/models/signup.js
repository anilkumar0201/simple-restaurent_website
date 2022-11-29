import mongoose from 'mongoose';
const { Schema } = mongoose;
const SignupSchema = new mongoose.Schema({
    email:{
        type:String,
        // required:true
    },
    password:
    {
        type:String,
        // required:true
    },

    confirm:{
        type:String,
        // required:true
    }
})
export default mongoose.model("signup",SignupSchema)