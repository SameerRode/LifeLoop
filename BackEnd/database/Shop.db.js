const mongoose = require("mongoose");
require('dotenv').config()
const { Schema } = mongoose;

const Shop = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        min:1, max:5,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now 
    }
})


const ShopModel = mongoose.model("todos", Todo);

const connectShopDB = async() =>{
    try{
        await mongoose.connect("process.env.MONGODB_URL");
        console.log("Connected to Todo DB Successfully");
    }
    catch(error){
        console.log("Error While Connecting to DB",error.message);
    }
}



const ShopModel = mongoose.model("todos", Todo);

module.exports={
    TodoModel,
    connectShopDB
}