// //this will be the place in which we will create call back functions for our routes

module.exports = {
    scheduling
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
