// Importing the http module 
const http = require('http') ;
const url = require('url');
const fs = require('fs');

// Creating server 
const server = http.createServer((req, res) => { 
	// Sending the response 
	// res.writeHead(200, {'Content-Type': 'text/html'});
	// res.write("This is the response from the pronob`s server") 
	// res.write(req.url)
	// var q = url.parse(req.url , true).query;

	fs.readFile('./index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	  });
	//   fs.appendFile('mynewFile.txt','Hello Node Content', function(err){
	// 	  if(err) throw err;
	// 	  console.log('Seved!');
	// 	});

		// fs.open('mynewFile1.txt', 'w', function (err, file) {
		// 	if (err) throw err;
		// 	console.log('Saved!');
		// });
		
	//   fs.writeFile('mynewFile1.txt', 'Hello content ! Hello content ', function (err) {
	// 	if (err) throw err;
	// 	console.log('Saved!');
	//   });

	//   fs.unlink('mynewFile1.txt', function (err) {
	// 	if (err) throw err;
	// 	console.log('File deleted!');
	//   });

	//   fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
	// 	if (err) throw err;
	// 	console.log('File Renamed!');
	//   });

	// res.end(); 
}) 

// Server listening to port 3000 
server.listen((3000), () => { 
	console.log("Server is Running");
	
})


// <<<<<<<<<<<<<<==node file sestem==>>>>>>>>>
// <<<<<<<<<<<<<<==node file sestem==>>>>>>>>>
// console.log(fs);