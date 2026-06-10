const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const app=express();
app.use(express.json());
const {ShopModel} = require('../database/Shop.db')

export async function AddToCart(){
    
    const { name, rating , price , CreatedAt } = req.body
    try{
        await CartModel.create({
            name: name,
            price: price,
            CreatedAt: CreatedAt,
        })

    }catch (error) {
        res.status(500).json({
            message: "pease fill all parameters",
            error: error.message
        });
    }
    

}

export async function ShowCart(){
  const {userId} = req.body

  const CartModel = await CartModel.find({
      userId
  }).populate("userId")
  .exec()
  .then(console.log("CartModel Found"))

  res.json({
    Cart
  })
}
module.export = { AddToCart , ShowCart }