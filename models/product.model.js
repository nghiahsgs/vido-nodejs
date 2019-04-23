var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSchema=new Schema({
	user:{
		type:Schema.Types.ObjectId,
		ref:"user"
	},
	phone:String,
	address:String,
	title:String,
	content:String,
	category:{
		type:Schema.Types.ObjectId,
		ref:"category"
	},
	price:String,
	view:Number,
	description:String,
	status:{
		type:Schema.Types.ObjectId,
		ref:"status"
	},
	start_at:String,
	end_at:String,
	buy_at:String,
	isAvaiable:String,
	requiementNbs:String

})

productModel=mongoose.model("product",productSchema);
module.exports=productModel;