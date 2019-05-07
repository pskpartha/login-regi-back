const express = require('express');
const app = express();
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./db/db');
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});

app.get('/', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db
    })
  });

// Home page route
app.get('/wiki', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'wiki new works!'
      });
  });


  