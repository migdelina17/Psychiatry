const express = require('express');
const router = express.Router();

const isLoggedIn = require('../config/auth');//I want to make sure user is logegd in


const providersCtrl = require('../controllers/providers'); //.. back tracks two spots - one doc goes back just one spot 


//GET request to get the schema to render on providers ejs page


router.get('/appointments/index/:id/', providersCtrl.edit); 

router.post('/appointments/index/:id/', providersCtrl.addProvider); //intended destination is providers to edit
//look at crud cheat sheet to fix the path 






// router.put('/appointments/index/:id/', isLoggedIn, providersCtrl.update);


module.exports = router;

// //then! 

// //PUT request that method override will fix to update provider to app
// // in our controller function we will probably have something saying push 
// //to add to our appointment detals

// //and we want it to render to the controllers page 
/* <form action="/providers/appointments/index/<%= appointment._id %>?_method=PUT" method="POST">
*/