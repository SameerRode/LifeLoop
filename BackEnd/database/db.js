const mongoose = require("mongoose");
require('dotenv').config()
const { Schema } = mongoose;


const User = new mongoose.Schema({
        username:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true,
            
        },

        password:{
            type:String,
            required:true}

})

const Todo= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        required:true        
    },
    userId:{
        type: Schema.Types.ObjectId, ref: "User"
    }
})

const UserModel = mongoose.model("users", user);

const connectDB = async() =>{
    try{
        await mongoose.connect("process.env.MONGODB_URL");
        console.log("Connected to DB Successfully");
    }
    catch(error){
        console.log("Error While Connecting to DB",error.message);
    }
}

module.export ={ 
    connectDB,
    UserModel
};