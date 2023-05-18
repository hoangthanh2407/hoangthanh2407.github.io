// tạo web server với NodeJS */

//1. khai báo & import thư viện http
const http = require('http');
//2. Khai báo host (server)
const host = 'localhost';
//3. Khai báo server pỏt (default : 3000)
const port = 3000;
//4. tạo server
const server = http.createServer((request,respond)=>{
    respond.write("<h1>This is NodeJS web server</h1>")
    respond.end();
})
//5. Chạy server bằng cách Listen port
server.listen(port);