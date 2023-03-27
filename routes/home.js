
//THIS PAGE COULD TECHNICALLY BE SPLIT BETWEEN ROUTES AND CONTROLLERS. MAYBE ASK IF YOU ARE SUPPOSED TO?
// YOU WOULD NEEED TO JUST CREATE THE APPROPRIATE HTTP ROUTE AND SET CONTROLLER, AND THEN SET UP THE FUNCTION IN CONTROLLERS    
//UNDER A NEW FILE NAMED NAMED HOME.JS:))) I THINK! DOUBLE CHECK! CAUSE IT IS NOT DOING LOCALHOST:3000/HOME. IT IS ONLY DOING THE '/'

const router = require('express').Router(); //removed .Router() following express cause of error
// const passport = require('passport');

// // The root/home route renders our only view/home
router.get('/', function(req, res) {
res.render('home', { title: 'Psychiatric Services'});
//this above calls on the home ejs 

//   //UPDATE THIS
//   // Where do you want to go for the root route
//   // in the student demo this was res.redirect('/movies'), what do you want?
//   // This could be a landing page, or just redirect to your main resource page which you'll have an a tag that makes 
//   // a request to `/auth/google` route below
});


module.exports = router;
