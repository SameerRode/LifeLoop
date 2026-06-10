require('dotenv').config({ path: "./BackEnd/.env" });
const express = require("express");
const mongoose = require("mongoose");
const db = require('./database/db')
const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');
const shopRoutes = require('./routes/shop.routes')
const userdb = require('./database/User.db')
const tododb = require('./database/Todo.db')
const Shopdb = require('./database/Shop.db')
const cors = require("cors");


app.use(cors());

const app = express();
app.use(express.json());
app.use('/api')
app.use('/auth', authRoutes);
app.use('/api/AddToCart', ShopRoutes);
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