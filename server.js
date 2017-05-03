/*
* SETUP
*/

var express  = require('express');
var app      = express();                   // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

// db configuration
// ...

// server setup 
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

/*
* API ROUTES
*/

// get hyped bands
app.get('/api/hyped_bands', function(req, res) {

	var hyped_bands = [
						{'bandId' : 1, 'bandCodedName': 'arcadefire', 'bandName': 'Arcade Fire', 'hypeScore' : 0.86}, 
						{'bandId' : 2, 'bandCodedName': 'mishima', 'bandName': 'Mishima', 'hypeScore' : 0.63},
						{'bandId' : 3, 'bandCodedName': 'boniver', 'bandName': 'Bon Iver', 'hypeScore' : 0.816}];

	/*
		TODO: Read hyped_bands from DB
	*/
	res.json(hyped_bands);

});

/*
* FRONTEND ROUTES
*/

app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

/*
* RUN
*/

// Start server
app.listen(8080);
console.log("App listening on port 8080");