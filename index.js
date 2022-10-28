const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routesHandler);

app.get('/', (req, res) => {
  res.send({ one: 'Love keep us together' });
});

app.listen(5000, () => {
  console.log('Server is running fine');
});
