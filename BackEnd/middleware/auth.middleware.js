const express = require("express");
const jwt= require("jsonwebtoken");
export function auth(req,res,next){
    const token = req.header.authorization;

    if (!token){
        return res.status(402).json({
            message:"Token Is Missing !!"
        })
        try{
            const DecodedData = jwt.verify( token , process.env.JWT_SECRET )
            req.userId = DecodedData.id
            next()
        }catch{
            return res.json({
                message:"Invalid Token !!"
            })
        }
    }
}