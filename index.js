const express = require('express');

var app = express();
app.set('port', process.env.PORT || 4000);
var server = app.listen(app.get('port'), function() {
    console.log('listening for requests on port 4000');
});

app.use(express.static(__dirname));