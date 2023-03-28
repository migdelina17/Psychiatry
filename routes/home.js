
//THIS PAGE COULD TECHNICALLY BE SPLIT BETWEEN ROUTES AND CONTROLLERS. MAYBE ASK IF YOU ARE SUPPOSED TO?
// YOU WOULD NEEED TO JUST CREATE THE APPROPRIATE HTTP ROUTE AND SET CONTROLLER, AND THEN SET UP THE FUNCTION IN CONTROLLERS    
//UNDER A NEW FILE NAMED NAMED HOME.JS:))) I THINK! DOUBLE CHECK! CAUSE IT IS NOT DOING LOCALHOST:3000/HOME. IT IS ONLY DOING THE '/'

const router = require('express').Router(); //removed .Router() following express cause of error
// const express = express.Router();
const passport = require('passport');

// // The root/home route renders our only view/home
router.get('/', function(req, res, next) {
res.render('home', { title: 'Psychiatric Services'});
//this above calls on the home ejs 

//   //UPDATE THIS
//   // Where do you want to go for the root route
//   // in the student demo this was res.redirect('/movies'), what do you want?
//   // This could be a landing page, or just redirect to your main resource page which you'll have an a tag that makes 
//   // a request to `/auth/google` route below
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
      successRedirect : '/appointments', // UPDATE THIS, where do you want the client to go after you login 
      failureRedirect : '/home' //  UPDATE THIS, where do you want the client to go if login fails
    }
  ))
  
  // OAuth logout route
  router.get('/logout', function(req, res){
    req.logout(function(){ //< - req.logout comes from passport, and what it does is destorys the cookie that's keeping track of the user!
      res.redirect('/') //I need them to go to the home page
    })
  })
  
  

module.exports = router;
