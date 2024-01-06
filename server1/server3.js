// HTTP 보내기
const http=require('http');

//HTTP 파일 보내는 서버
const fs=require('fs');

const homepage=fs.readFileSync('./pages/home.html');
const contactpage=fs.readFileSync('./pages/contact.html');
const server=http.createServer((req, res) =>{
    if(req.url == '/') {
        res.end(homepage);
    } else if(req.url == '/contact') {
        res.end(contactpage);
    } else {
        res.writeHead(404);
        res.end('page not found');
    }
});

server.listen(3001, ()=>{console.log('Server is Running on Port 3000')});