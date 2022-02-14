const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const routerApi = require('../routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('../middlewares/errorHandler');

app.set('port', 3000);

app.get('/', (req, res) => {
  res.send('Hola');
});

// Middlewares

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Starting the server

app.listen(app.get('port'), () => {
  console.log('Listening in ' + app.get('port'));
});
