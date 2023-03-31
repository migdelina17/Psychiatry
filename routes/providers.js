const express = require('express');
const router = express.Router();

const isLoggedIn = require('../config/auth');//I want to make sure user is logegd in


const providersCtrl = require('../controllers/providers'); //.. back tracks two spots - one doc goes back just one spot 


//GET request to get the schema to render on providers ejs page


router.get('/index/:id/', providersCtrl.edit); 
//when we click the select provider button it will trigger that route
//then it will run the edit: editappointment function inside our provider controllers 

router.put('/index/:id/', isLoggedIn, providersCtrl.update); //intended destination is providers to edit
//when we click addprovider in our providers page it'll trigger this route
//then the update: addProvider function will run 





module.exports = router;
