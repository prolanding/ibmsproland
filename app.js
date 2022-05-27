//1
const express = require("express"); 
const app = express();
const signuprouter = require("./src/routes/signuprouter");


//4
app.set('view engine','ejs');
app.use(express.static('./public'));
app.set('views','./src/views');

//3
app.get("/",(req,res)=>{
 res.render('index');
});

app.use("/login",loginrout);
app.use("/signup",signuprouter);

//app.use("/verification",validationRouter);


//2
const port = process.env.PORT || 2800; // while hosting port num 2800 cannot be always maintained, so port keeps on changing PAGE 1 
app.listen(port)                       