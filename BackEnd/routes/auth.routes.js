const express =require('express');
const { signup, signin }=  require('../controller/auth.controller');    
const router = express.Router();

//--------------*endpoints*---------------

    router.post('/signup',signup(req,res));

    router.post('/signin',signin(req,res));

module.exports = router;