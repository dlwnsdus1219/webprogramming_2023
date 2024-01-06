
//웹 서버 코드
const http = require('http');
//HTML 보내기
const fs = require('fs');

const homepage = fs.readFileSync("./homepage.html");
const aboutPage = fs.readFileSync("./aboutpage.html");
const contactPage = fs.readFileSync("./contact.html");
const notFoundPage = fs.readFileSync('./notfound.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === '/about'){
        res.end(aboutPage)
    }
    else if(req.url === '/contact'){
        res.end(contactPage);
    }
    else if(req.url === '/')
        res.end(homepage)
    else{
        res.writeHead(404)
        res.end(notFoundPage)
    }

});
server.listen(3000);