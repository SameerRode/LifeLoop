const express = require('express')
const MiddleWare = require('../middleware/auth.middleware')
const router = express.Router();
const { AddToCart } = require('../controller/shop.controller')

    router.post('/AddToCart' , AddToCart(req , res))
   
    router.get('/ShowCart ' , ShowCart(req , res))

module.exports = router;