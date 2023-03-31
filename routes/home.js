

const router = require('express').Router(); 
const passport = require('passport');

// The root/home route renders our only views/home home.ejs file
router.get('/', function(req, res, next) {
res.render('home', { title: 'Psychiatric Services'});

});




// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ))
  
  // Google OAuth callback route
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/', // Home page
      failureRedirect : '/' //  Home page
    }
  ))
  
  // OAuth logout route
  router.get('/logout', function(req, res){
    req.logout(function(){ //< - req.logout comes from passport, and what it does is destorys the cookie that's keeping track of the user!
      res.redirect('/') //I need them to go to the home page
    })
  })
  
  

module.exports = router;
