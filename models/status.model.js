var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var statusSchema=new Schema({
	name:String
})

statusModel=mongoose.model("status",statusSchema);
module.exports=statusModel;