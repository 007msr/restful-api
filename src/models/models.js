const mongoose= require("mongoose");
const menSchema= new mongoose.Schema({
    rank:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    score:{
        type:Number,
    },
    event:
    {
        type:String,
        default:true,
    }
})
const MenModel=new mongoose.model("apidetail", menSchema);
module.exports=MenModel;