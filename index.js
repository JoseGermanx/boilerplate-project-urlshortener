/*
You should provide your own project, not the example URL.
Waiting:You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties.
Waiting:When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.
Waiting:If you pass an invalid URL that doesn't follow the valid url format, the JSON response will contain { error: 'invalid url' }

*/

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', function(req, res) {

  res.json({ original_url : 'https://freeCodeCamp.org', short_url : 1}
  
  );
  
});





app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
