var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var favoriteSchema=new Schema({
	content:String,
	
	user:{
		type:Schema.Types.ObjectId,
		ref:"user"
	},
	product:{
		type:Schema.Types.ObjectId,
		ref:"product"
	}

})
favoriteModel=mongoose.model("favorite",favoriteSchema);
module.exports=favoriteModel;