const express = require('express');
const router = express.Router();

const isLoggedIn = require('../config/auth');//I want to make sure user is logegd in
const providers = require('../controllers/providers');

const providersCtrl = require('../controllers/providers') //.. back tracks two spots - one doc goes back just one spot 


//GET request to get the schema to render on providers ejs page

router.get('/appointments/index/:id/', providersCtrl.edit); //intended destination is providers to edit

router.put('/appointments/index/:id/providers', isLoggedIn, providersCtrl.update);


module.exports = router;

// //then! 

// //PUT request that method override will fix to update provider to app
// // in our controller function we will probably have something saying push 
// //to add to our appointment detals

// //and we want it to render to the controllers page 
