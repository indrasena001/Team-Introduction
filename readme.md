1. Install node.js
2. update packages
3. type command to install express

>> npm init -y   
>> npm install express


4. To run type command 

>>  node script.js

## it launch the website in the given local host http://localhost:3000/

server code: 

## const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});
