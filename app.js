var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT|3001);
app.get('/', function(req, res){
    res.send('Jonghwa86aa world from c9 IDE');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port '+ app.get('port'));
});

