var express = require('express');

// Load namespace module before creating the server
require('express-namespace');

var app = express();
app.set('port', process.env.PORT || 5000);
app.use('/vendor', express.static(__dirname + '/tmp/vendor'));
app.use('/javascript', express.static(__dirname + '/tmp/assets/javascript'));
app.use('/styles', express.static(__dirname + '/tmp/assets/styles'));
app.use('/assets', express.static(__dirname + '/tmp/assets'));
app.use(express.static(__dirname + '/tmp'));

console.log('Using API Stub');
// Load API stub routes
app.use(express.json());
app.use(express.urlencoded());
require('./api-stub/routes')(app);

app.get('/', function(req, res) {
  res.render('index.html');
});

    // spin up server
app.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
