// load the env consts
require('dotenv').config(); // this line allows our node app to read from the .env file!
// process.env.VARIABLE_NAME, process.env.GOOGLE_CALLBACK or process.env.GOOGLE_SECRET
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
// session middleware
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

//1. HOME PAGE = DEFINE ROUTE
const homeRouter = require('./routes/home'); //changed index to home to define our first route from 
//2. SCHEDULING PAGE = WE WILL BE ROUTINGO TO THIS PAGE WHEN SCHEDULE AND APPOINTMENT LINK IN HOMEPAGE IS CLICKED 
const appointmentsRouter = require('./routes/appointments');


// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

//MIDDLEWARE

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user; // assinging a property to res.locals, makes that said property (user) availiable in every
  // single ejs view
  next();
});

// mount all routes with appropriate base paths

//1. this is where we will be routed to our home page
app.use('/', homeRouter); //changed index to home
///2. CREATE APPOINTMENT
//This is the route that the http request will take when we click on the schedule app link in the home page.
//
app.use('/appointments', appointmentsRouter);


// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('You need a route/destination!cannot find that. this is the server routing you no where');
});

module.exports = app;
