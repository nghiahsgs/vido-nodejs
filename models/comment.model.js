var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var commentSchema=new Schema({
	content:String,
	user:{
		type:Schema.Types.ObjectId,
		ref:"user"
	},
	product:{
		type:Schema.Types.ObjectId,
		ref:"product"
	},
	parent:String,

	create_at:String

})

commentModel=mongoose.model("comment",commentSchema);
module.exports=commentModel;