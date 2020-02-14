let jes={
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
}

let ray=[1,2,3]


const http=require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if (req.url==='/api/courses'){
        res.write(JSON.stringify(jes));
        res.end();
    }
});

// server.on('connection',(socket)=>{
//     console.log('new Conection');
// });
//server is eventemitter
server.listen(3000);
console.log('Listening on port 3000..');


