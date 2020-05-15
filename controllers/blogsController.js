const Blogs = require('../models/blogs');
const User = require('../models/user');

module.exports = {
    createBlog: (req, res) => {
        var blogs = new Blogs(req.body);
        User.find({}, (foundLoggedInUserError, foundLoggedInUser) => {
            if (foundLoggedInUserError) {
                res.status(500).json({ success: false, error: foundLoggedInUserError });
            } else {
                if (foundLoggedInUser) {
                    blogs.save((createBlogError, createdBlog) => {
                        if (createBlogError) {
                            res.status(500).json({ success: false, error: createBlogError });
                        } else {
                            res.status(200).json({ success: true, blog: createdBlog });
                        }
                    });
                } else {
                    res.status(500).json({ success: false, message: "user not found" });
                }
            }
        });
    },

    showBlogs: (req, res) => {
        // User.find({}, (foundLoggedInUserError, foundLoggedInUser) => {
        // if (foundLoggedInUserError) {
        //     res.status(500).json({ success: false, error: foundLoggedInUserError });
        // } else {
        // if (foundLoggedInUser) {
        Blogs.find({}).populate('likes').populate('dislikes').populate('comments').exec((showBlogsError, showingBlogs) => {
            if (showBlogsError) {
                res.status(500).json({ success: false, error: showBlogsError });
            } else {
                res.status(200).json({ success: true, blogs: showingBlogs });
            }
        });
        // } else {
        // res.status(500).json({ success: false, message: "user not found" });
        // }
        // }
        // });
    },

    likeBlog: (req, res) => {
        Blogs.findByIdAndUpdate(req.body.id, { $set: { likes: '5ebd43950895ae3fb5175df7' } }, (updateError, updatedUser) => {
            if (updateError) {
                res.status(500).json({ success: false, error: updateError });
            } else {
                res.status(200).json({ success: true, user: updatedUser });
            }
        });
    },
    disLikeBlog: (req, res) => {
        Blogs.findByIdAndUpdate(req.body.id, { $set: { dislikes: '5ebd43950895ae3fb5175df7' } }, (updateError, updatedUser) => {
            if (updateError) {
                res.status(500).json({ success: false, error: updateError });
            } else {
                res.status(200).json({ success: true, user: updatedUser });
            }
        });
    },
    addComments: (req, res) => {
        Blogs.findByIdAndUpdate(req.body.id, { $set: { comments: '5ebd43950895ae3fb5175df7' } }, (addCommentsError, commentAdded) => {
            if (addCommentsError) {
                res.status(500).json({ success: false, error: addCommentsError });
            } else {
                res.status(200).json({ success: true, user: commentAdded });
            }
        });
    }

}