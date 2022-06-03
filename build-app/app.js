var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Per aspera ad astra\n');
});

app.listen(8080, function () {
  console.log('Per aspera ad astra');
});

