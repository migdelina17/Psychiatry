//this is where we will create out http request routers 
// //and set values to call on functions in the controllers folder

const express = require('express');
const router = express.Router();

//define passport 
const isLoggedIn = require('../config/auth')



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

//we now need a router to create an appointment and add it to our database 
router.post('/', isLoggedIn, appointmentsCtrl.create);
//no need to require since appointmentsCtrl already is and we are going to the same place/file in controllers

//isLoggedIn will create an appointment only if user is logged in


//to work on once pages are set up
//I want patients log in when they click on create appointment link, and once loged in they can be redirected 
//to a confirmation pop up/page where they can see the details of their appointment


//I want patients to go to the log in page when they click on the link create appointment 
//I want patients to be taken to the scheduling page after log in is successful 

router.get('/index', appointmentsCtrl.index); //hoping to get the list of booked appointments by logged in patient


router.delete('/index/:id', isLoggedIn, appointmentsCtrl.delete); //idk if we can use the word cancel









module.exports = router;