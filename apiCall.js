var http = require('http');
var api_key = 'dad18162c19e26aa';
//The url we want is: 'http://api.wunderground.com/api/dad18162c19e26aa/conditions/q/CO/Centennial.json'
var options = {
  host: 'api.wunderground.com',
  path: '/api/'+api_key+'/conditions/q/CO/Centennial.json'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    //console.log(str);
    var obj = JSON.parse(str);
    var cur = obj.current_observation;
    console.log( cur.display_location.city );
    console.log( cur.temp_f );
    console.log( cur.observation_time );
  });
}

http.request(options, callback).end();