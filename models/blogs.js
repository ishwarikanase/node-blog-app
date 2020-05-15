const mongoose = require('mongoose');
const Comments=require('./comments');

var blogs = mongoose.Schema({
    title: { type: String },
    body: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comments'}]
});

module.exports = mongoose.model('Blogs', blogs);
