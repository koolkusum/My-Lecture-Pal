
const mongoose = require('mongoose');
const EventModel = require('./Events');

const UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          },
          message: props =>`${props.value} is not a valid email.`  
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    },
    topicOfInterest: {
        type: [],
        default: []
    },
    events: {
        type: [String],
        default: []
    }
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel