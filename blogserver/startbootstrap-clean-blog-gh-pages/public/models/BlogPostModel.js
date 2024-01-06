const mongoose = require("mongoose");
const BlogPostSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "몰?루"
    },
    title: String,
    body: String,
    date: {
        type: Date,
        default: new Date(),
    },
});
const BlogPostModel = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPostModel;