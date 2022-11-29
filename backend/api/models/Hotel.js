import mongoose from 'mongoose';
const { Schema } = mongoose;
const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    no_of_people:
    {
        type:Number,
        // required:true,
    },

    type:{
        type:String,
        // required:true
    },
    rating:{
        type:Number,
        min:0,
        max:10
    },
    price:{
        type:Number,
        // required:true
    }
})
export default mongoose.model("Hotel",HotelSchema)