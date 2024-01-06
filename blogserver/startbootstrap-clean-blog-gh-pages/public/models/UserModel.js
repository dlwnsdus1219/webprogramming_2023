const mongoose = require("mongoose");

//userSchema 정의
const userSchema = new mongoose.Schema({
    id: String,
    age: Number,
    addr: String
});
