var express= require("express");
var app=express();

//view engine
app.set('view engine', 'pug')

//load controller
userConroller=require("./controller/user.controller");

//config router
app.use("/user",userConroller);

var port=3000
app.listen(port,function(){
	console.log("server on "+port);
})