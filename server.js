var http = require("http");
var url = require("url");


function start(route, handle){

	http.createServer(function(request, response) {

		var postData = "";
		var pathname = url.parse(request.url).pathname;
		
		console.log("path name: " + pathname);

		route(handle, pathname, request, response);

	}).listen(8888);

	console.log("Server started");

}

exports.start = start;