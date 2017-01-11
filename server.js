const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./build'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(9000, () => console.log('server runinng..'));

//35.167.51.31
