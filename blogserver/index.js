const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs"); // 템플릿 엔진 사용 등록

// views 폴더에서 ejs 파일을 html 파일로 변환시켜서 보내주어야 함
// 이에 따라 코드 변경!
app.get("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "./views/index.html"));
  res.render("index");
});
app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./views/about.html"));
  res.render("about");
});
app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./views/contact.html"));
  res.render("contact");
});
app.get("/post", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./views/post.html"));
  res.render("post");
});

app.listen(3300, () => {
  console.log("server on port 3300");
});

