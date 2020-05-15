const mongoose = require('mongoose');

var user = mongoose.Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

user.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    else {
        bcrypt.hash(this.password, 10, (err, hash) => {
            if (err) {
                return next();
            }
            else {
                this.password = hash;
                next();
            }
        })
    }
});

user.methods.comparePassword=(hash,password)=>{
    return bcrypt.compareSync(password,hash);
}
module.exports = mongoose.model('User', user);