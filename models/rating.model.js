var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ratingSchema=new Schema({
	
	user:{
		type:Schema.Types.ObjectId,
		ref:"user"
	},
	product:{
		type:Schema.Types.ObjectId,
		ref:"product"
	},
	value:String

})

ratingModel=mongoose.model("rating",ratingSchema);
module.exports=ratingModel;