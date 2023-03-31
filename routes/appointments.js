

const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth')
//isLoggedIn used for POST PUT & DELETE


//require the controllers file that has the functions that we want to call on
const appointmentsCtrl = require('../controllers/appointments');



router.get('/', appointmentsCtrl.new);
//the scheduling link will send GET HTTP REQ then the new: scheduling funtion will run



router.post('/', isLoggedIn, appointmentsCtrl.create);
//Create apppintment link will send HTTP POST, then the create function will be called 



router.get('/index', appointmentsCtrl.index); 
//Index route is triggered by the create function that then calls on our index function to run
//sending GET HTTP REQUEST



router.delete('/index/:id', isLoggedIn, appointmentsCtrl.delete); //idk if we can use the word cancel
//when we click cancel button in the index page it will trigger this delete route



module.exports = router;