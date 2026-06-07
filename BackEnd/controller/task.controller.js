const express = require ('express');
const jwt  = require ('jsonwebtoken');
const dotenv = require ('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
const { TodoModel }=require('../database/db')


export async function AddTodo(req, res) {
  const { title, description ,done } = req.body;

  await TodoModel.create({
    userId: req.userId,
    title,
    description,
    done,

  });

  res.json({ message: "Todo created" });
};

export async function ShowTodo(){
  const {userId} = req.body

  const TodoModel = await TodoModel.find({
      userId
  }).populate("userId")
  .exec()
  .then(console.log("TodoModel Found"))

  res.json({
    todo
  })
}

module.export = { AddTodo , ShowTodo }