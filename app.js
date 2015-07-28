var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants')
});

// creates an applicant
app.post('/applicant', function(req, res){

	console.log(req.body);
	// Here is where you need to get the data
	// from the post body and store it in the database
	res.send('Success!');
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});

app.get("/success", function)

// EXERCISE DIRECTIONS
// Create a new route and view for the success message. In the /applicant route handler, redirect the user to the new route you created. Confirm the new functionality by submitting another form. Make sure you are correctly redirected to your new Success page.
