require("dotenv").config({path:("../.env")});
console.log("ENV PATH:", require('path').resolve('.env'));
console.log(process.env.MONGODB_URL);
console.log(process.env.PORT);
console.log(process.env.JWT_SECRET);
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

    mongoose
        .connect(process.env.MONGODB_URL)
        .then(()=> console.log("Connected To Mongo DataBase"))
        .catch((err)=> console.log(err));

    const {JWT_SECRET,PORT} = process.env;
    app.listen(PORT,()=>{
        console.log(`Server is Running on Port ${PORT}`);
    })