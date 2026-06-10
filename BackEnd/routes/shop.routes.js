const express = require('express')
const MiddleWare = require('../middleware/auth.middleware')
const router = express.Router();
const { AddToCart } = require('../controller/shop.controller')
const Middle = require('../middleware/auth.middleware')
router.use(Middle)
    router.post('/AddToCart' , AddToCart(req , res));
 const { router } = require('./auth.routes');
  
    router.get('/ShowCart ' , ShowCart(req , res))

module.exports = router;    