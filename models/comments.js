const mongoose=require('mongoose');

var comments=mongoose.Schema({
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    postedTo:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    postedAt:{type:Date,default:Date.now()},
});
module.exports=mongoose.model('Comments',comments);
