// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
//GET request to format natural and UNIX date
app.get('/naturaldate/:dateVal',(req,res,next)=> {
  
  //Gets the request Data from URL
  var dateVal = req.params.dateVal
  
  //Formatting Date
  var dateFormat = {
  day: 'numeric',
  month: 'numeric',
  year: 'long'
  }
  
  if(isNaN(dateVal)){
  var naturalDate = new Date(dateVal)
  naturalDate = naturalDate.toLocaleString("en-us", dateFormat)
    var unixDate = new Date(dateVal).getTime()/1000
  
  }
  res.json({unix: unixDate, natural: naturalDate})
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});