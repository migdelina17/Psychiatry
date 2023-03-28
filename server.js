// load the env consts
require('dotenv').config(); // this line allows our node app to read from the .env file!
// process.env.VARIABLE_NAME, process.env.GOOGLE_CALLBACK or process.env.GOOGLE_SECRET
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session'); // session middleware
const passport = require('passport');
// const methodOverride = require('method-override');


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
//since we are not exoorting anything from the database file,
//no need to save it to a constiable


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//THIS CREATES SESSION COOKIE AFTER RECEIVING CLIENT REQUEST
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//PASSPORT MUST BE ADDED AFTER THE SESSION, BECAUSE IS USES THE SESSION COOKIE 
//TO STORE THE LOGGED IN USERS ID

app.use(passport.initialize());
app.use(passport.session());

// app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// // mount the session middleware

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(methodOverride('_method')); 


// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user; // assinging a property to res.locals, makes that said property (user) availiable in every
  // single ejs view
  next();
});

// mount all routes with appropriate base paths

//1. this is where we will be routed to our home page
app.use('/', homeRouter); //this is the root of your. the '/', is invisible you could do without it 
///2. CREATE APPOINTMENT
//This is the route that the http request will take when we click on the schedule app link in the home page.
//
app.use('/appointments', appointmentsRouter); // this one will be used for the POST http request in appointments 


// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that');
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
