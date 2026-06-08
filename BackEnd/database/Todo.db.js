const mongoose = require("mongoose");
require('dotenv').config()
const { Schema } = mongoose;


const Todo= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    done:{
        type:Boolean,
        required:true        
    },
    userId:{
        type: Schema.Types.ObjectId, ref: "User"
    }
})

const connectTodoDB = async() =>{
    try{
        await mongoose.connect("process.env.MONGODB_URL");
        console.log("Connected to Todo DB Successfully");
    }
    catch(error){
        console.log("Error While Connecting to DB",error.message);
    }
}



const TodoModel = mongoose.model("todos", Todo);

module.exports={
    TodoModel,
    connectTodoDB
}