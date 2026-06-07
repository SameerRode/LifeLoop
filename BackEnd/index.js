require('dotenv').config({ path: "./BackEnd/.env" });

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

const { JWT_SECRET, PORT } = process.env;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected To MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is Running on Port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed:", err);
        process.exit(1);
    });