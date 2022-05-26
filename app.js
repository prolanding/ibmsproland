const express = require("express");
const app = express();
const validationRouter = express.Router();

app.set('view engine','ejs');
app.use(express.static('./public'));
app.set('views','./src/views');

app.get("/",(req,res)=>{
 res.render('index');
});
app.get("/login",(req,res)=>{
 res.render('login');
});
app.get("/signup",(req,res)=>{
 res.render('signup');
});
app.use("/verification",validationRouter);
app.listen(2800)