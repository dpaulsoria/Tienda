const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

const routerApi = require('../routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('../middlewares/errorHandler');

// Settings

app.set('port', 3000);
app.set('views', path.join(__dirname, '/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')


// Middlewares

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Basic routes

const optionsLogin = {};


app.get('/', (req, res) => {
  res.render(path.join(app.get('views') + '/login.html'), optionsLogin)
});

app.get('/dashboard', (req, res) => {
  res.render(path.join(app.get('views') + '/dashboard.html'), optionsLogin)
});



const options = require('./cors');

//app.use(cors(options));

app.use(cors());
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Static files

app.use(express.static(path.join(__dirname, '/public')))

// Starting the server

app.listen(app.get('port'), () => {
  console.log('Listening in ' + app.get('port'));
});
