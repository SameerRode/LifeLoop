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