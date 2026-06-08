const mongoose = require("mongoose");
require('dotenv').config()
const { Schema } = mongoose;


const User = new mongoose.Schema({
        username:{
            type:String,
            required:true,
            trim:true
        },

        email:{
            type:String,
            required:true,
            trim:true,
            
        },

        password:{
            type:String,
            required:true,
        trim:true}

})

const UserModel = mongoose.model("users", user);

const connectUserDB = async() =>{
    try{
        await mongoose.connect("process.env.MONGODB_URL");
        console.log("Connected to User DB Successfully");
    }
    catch(error){
        console.log("Error While Connecting to DB",error.message);
    }
}



const TodoModel = mongoose.model("todos", Todo);

module.exports={
    UserModel,
    connectUserDB
}