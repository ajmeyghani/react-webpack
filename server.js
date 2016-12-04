const express = require('express');
const app = express();
const path = require('path');

app.get('/api/projects/matches', function(req, res) {
  res.json([
      { id: 1, name: 'hello'},
      {id: 2, name: 'hello2'}
    ])
});

app.use('/', express.static(__dirname));

app.all(/^\/(?!api).*/, function(req, res){
  res.sendFile('index.html', {root: path.resolve(__dirname) });
});


app.listen(3000, e => console.log('server running'));
