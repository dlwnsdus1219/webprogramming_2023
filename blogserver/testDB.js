const express=require('express');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/testDB');

BlogPost.create({}, (err, data)={
    title: "첫 포스트"
    body: "처음 올리는 포스팅입니다...."
}, (err, data)=>{
    console.log(err, data)
})