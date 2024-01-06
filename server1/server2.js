const http=require('http'); 
const server=http.createServer((req, res) => {
        if(req.url == '/'){
            res.end("Home Page");
        } else if (req.url=='/about'){
            res.end('About Us');
        } else if (req.url=='/contact') {
            res.end('Contact Information');
        } else {
            res.writeHead(404);
            res.end('Page Not Found Error!')
        }
    }
);
server.listen(3000, ()=>{
    console.log('server is running on port 3000');
})