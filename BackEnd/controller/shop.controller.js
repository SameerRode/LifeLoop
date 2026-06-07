const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const app=express();
app.use(express.json());
const {ShopModel} = require('../database/db')

export async function AddToCart(){
    
}