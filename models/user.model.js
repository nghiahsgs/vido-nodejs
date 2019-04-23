var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
	fullname:String,
	email:String,
	pass:String,
	avatar:String,
	username:String,
	phone:String,
	address:String
})

userModel=mongoose.model("user",userSchema);
module.exports=userModel;