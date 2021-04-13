const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type :String,
        required : true
    },
    branch:{
        type :String,
        required : true
    },
    experties:{
        type :String,
        required : true
    },
})

const Userdata = mongoose.model('Userdata', userSchema);
module.exports = Userdata;