const mongoose = require('mongoose');
var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        minlength: 5, // a@b.in
        trim: true
    }
});

var user = new User({
    email: 'seshu@example.com      '
});

// user.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo');
// });

module.exports = { User }