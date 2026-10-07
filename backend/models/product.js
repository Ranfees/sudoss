const mongoose = require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    buyPrice:{
        type:Number,
        required:true
    },
    sellPrice:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model("Product",productSchema);