const express = require('express');
const MiddleWare = require('../middleware/auth.middleware')
const router = express.Router();
const Middle = require('../middleware/auth.middleware')
router.use(Middle)

    router.post('/AddTodo', AddTodo(req,res))

    router.get('/Show' , ShowTodo(req,res))

    export default router;