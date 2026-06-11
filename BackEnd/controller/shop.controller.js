const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const { ShopModel } = require("../database/Shop.db");

async function AddToCart(req, res) {
  const { name, price, CreatedAt, userId } = req.body;

  try {
    const cartItem = await ShopModel.create({
      name,
      price,
      CreatedAt,
      userId,
    });

    return res.status(201).json({
      message: "Item added to cart",
      cartItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Please fill all parameters",
      error: error.message,
    });
  }
}

async function ShowCart(req, res) {
  const { userId } = req.body;

  try {
    const cartItems = await ShopModel.find({ userId });

    return res.json({
      cartItems,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching cart",
      error: error.message,
    });
  }
}

module.exports = { AddToCart, ShowCart };
