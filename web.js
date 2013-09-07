yvar express = require('express');
var app = express();
app.use(express.logger());

var filename = "index.html"
var buf = fs.readFileSync(filename)

app.get('/', function(request, response) {
  response.send( buf.toString('utf-8') );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
