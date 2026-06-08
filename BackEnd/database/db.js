const mongoose = require("mongoose");
require('dotenv').config()
const { Schema } = mongoose;

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
    connectDB
};