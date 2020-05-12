const mongoose=require('mongoose');

var user=mongoose.Schema({
    name:{type:String},
    username:{type:String},
    email:{type:String},
    password:{type:String},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
});
module.exports=mongoose.model('User',user);