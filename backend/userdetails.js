const mongoose=require('mongoose');
 const UserDetailsSchema= new mongoose.Schema(
    {
        uname:String,
        upassword:String
    },
    {
    collection:"userInfo",
    }
 );
 mongoose.model("userInfo",UserDetailsSchema)