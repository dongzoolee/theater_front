const express = require('express');
const app = express();
const port = process.env.PORT || 2501;
const path = require('path');
const fs = require('fs')

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));   