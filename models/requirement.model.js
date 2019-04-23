var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var requirementSchema=new Schema({
	name:String
})

requirementModel=mongoose.model("requirement",requirementSchema);
module.exports=requirementModel;