const express = require ('express');
const jwt  = require ('jsonwebtoken');
const dotenv = require ('dotenv');
const { UserModel } = require('../database/User.db');
const bcrypt = require ('bcrypt');
dotenv.config();
const app = express();
app.use(express.json());


//used claude for formating and res.json was written twice
    async function signup(req, res) {
    const { username, email, password } = req.body;
    const hashedpass = await bcrypt.hash(password, 10);

    try {
        await UserModel.create({
            username: username,
            email: email,
            password: hashedpass
        });

        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({
            message: "User Created Successfully",
            token: token
        });

    } catch (error) {
        res.status(502).json({
            message: "Error While SignUp",
            error: error.message
        });
    }
}
    //used chat for formating  
    //wrote !user after already using user.password which will crash if user doesn't exist:
    
    async function signin(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
        return res.status(403).json({ message: "Invalid Credentials!" });
    }

    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
        return res.status(403).json({ message: "Invalid Credentials!" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({
        message: "SignIn Successful",
        token: token
    });
}

module.exports = { signup, signin };