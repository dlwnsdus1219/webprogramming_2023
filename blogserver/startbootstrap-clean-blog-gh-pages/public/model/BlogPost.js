const mongoose = reqiure('mongoose');
const Sehema = mongoose.Sehema;

const BlogPostSchema = new Schema({
    title:String,
    body:String
});

const BlogPost = mongoose.Model('BlogPOst', BlogPostSchema);
module.exports = BlogPost;