var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'application/json'});
  var readme=fs.createReadStream('index1.html','utf8');

//  readme.pipe(res);

 res.end(JSON.stringify(readme));
});

server.listen(3000,'127.0.0.1');
console.log("proceed");
