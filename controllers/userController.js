const User = require('../models/user');

module.exports = {
    registerUser: (req, res) => {
        User.findOne({ email: req.body.email }, (foundUserError, foundUser) => {
            if (foundUserError) {
                res.status(500).json({ success: false, error: foundUserError });
            } else {
                if (foundUser) {
                    res.status(200).json({ success: true, user: foundUser });
                }
                else if (!foundUser) {
                    var user = new User(req.body);
                    user.save((registerUserError, newUser) => {
                        if (registerUserError) {
                            res.status(500).json({ success: false, error: registerUserError });
                        }
                        else if (newUser) {
                            res.status(200).json({ success: true, user: newUser });
                        }
                    });
                }
            }
        });
    },

    loginUser:(req,res)=>{
        User.findOne({email:req.body.email},(foundLoginError,foundLoginUser)=>{
            if(foundLoginError){
                res.status(500).json({success:false,error:foundLoginError});
            }
            else if(foundLoginUser){
                res.status(200).json({success:true,message:"login successfully!!!"});
            }
        });
    },

}
