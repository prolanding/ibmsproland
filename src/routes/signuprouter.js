const express = require("express"); 
const signuprouter = express.Router();
const signupmodel = require("../model/signupmodel");


signuprouter.get("/",(req,res)=>{
        res.render('signup');
    });
    
signuprouter.get("/add",(req,res)=>{
    console.log("adlee");
    var data = {
            uname : req.query.uname,
            ads   :  req.query.ads,
            pn    :  req.query.pn,
            gm    :  req.query.gm,
            pwd   :  req.query.pwd
        }
        var dbdata = signupmodel(data);
        dbdata.save()
        
        res.render('login');
        });
    
    

console.log("running..");

module.exports = signuprouter;



