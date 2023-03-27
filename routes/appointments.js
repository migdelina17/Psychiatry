//this is where we will create out http request routers 
// //and set values to call on functions in the controllers folder

const express = require('express');
const router = express.Router();

//define passport 
const passport = require('passport')



// // //we need to require the controllers file that has the functions that
// // //we want the intended http request to call on 
const appointmentsCtrl = require('../controllers/appointments');

// // //this is where we will go after the book appointment link is clikced. 
// // //we want to be taken to the scheduling page so that we can submit appointment information 
// // //before clicking on book
router.get('/', appointmentsCtrl.scheduling);
// // // //the post router will be calling on the appointments controller to create 
// // // router.post('/', appointmentsCtrl.create);
// // //we want to create after you get the page. So first we need to get the page to fill out information 
// // //remember that in controllers you need to export the function name. In this case it will be scheduling 




//to work on once pages are set up
//I want patients log in when they click on create appointment link, and once loged in they can be redirected 
//to a confirmation pop up/page where they can see the details of their appointment


//I want patients to go to the log in page when they click on the link create appointment 
//I want patients to be taken to the scheduling page after log in is successful 



// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/index', // UPDATE THIS, where do you want the client to go after you login 
    failureRedirect : '/home' //  UPDATE THIS, where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){ //< - req.logout comes from passport, and what it does is destorys the cookie keeping track of the user!
    res.redirect('/home') // <---- UPDATE THIS TO WHERE YOU WANT THE USER TO GO AFTER LOGOUT
  })
})
















module.exports = router;