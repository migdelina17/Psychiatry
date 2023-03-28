// //this will be the place in which we will create call back functions for our routes

//we have to require our model/schema
const AppointmentModel = require('../models/appointment'); //this is the route to appointments file in model folder 
// const appointments = require('../models/appointments');


//we will have to use req.user in our functions


module.exports = {
    scheduling,
    create //you need to have an appropriate funtion 
}

// // //we have to create a function that will allow us to create an appointment using the 
// // //model schema

function scheduling(req, res) {
    //we want this to render our scheduling apppintment set up with our schema. So we need to require the model and create the schema before continuing
    //make sure that you also set up how you want your page to look like in views ejs file, in this situation we are working with scheduling 

    //but first, lets make sure that we test that we are routing to the right location 
    res.render('appointments/scheduling')
}

// // //ANOTHER THING
// // // I think we might need to move the login/google authentification functions here for organization purposes. 
// // //I am still trying to figure out if I want patients to log in before filling out information, or after. 

function create(req, res){

    AppointmentModel.create(req.body)//this will go create t
    .then(function(appointment){
        console.log(appointment)

        res.redirect('/index');//after creating appointment I to be redirected to my appointments

    }).catch((err) => {
        console.log(err);
        res.send('ERROR')

    })



}