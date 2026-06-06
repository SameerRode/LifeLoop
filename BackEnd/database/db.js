const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = async() =>{
    try{
        await mongoose.connect("process.env.MONGODB_URL");
        console.log("Connected to DB Successfully");
    }
    catch(error){
        console.log("Error While Connecting to DB",error.message);
    }
}

const user = new mongoose.Schema({
        username:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true
        },

        password:{
            type:String,
            required:true}

})
const UserModel = mongoose.model("users", user);

module.export ={ 
    connectDB,
    UserModel
};