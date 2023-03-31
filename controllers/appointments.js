// //this will be the place in which we will create call back functions for our routes

//we have to require our model/schema
const AppointmentModel = require('../models/appointment'); //this is the route to appointments file in model folder 
// const appointments = require('../models/appointments');


//we will have to use req.user in our functions


module.exports = {
    scheduling,
    create, //you need to have an appropriate funtion 
    index,
    delete: cancelAppointment
}

// // //we have to create a function that will allow us to create an appointment using the 
// // //model schema

function scheduling(req, res) { //gets the page
    //we want this to render our scheduling apppintment set up with our schema. So we need to require the model and create the schema before continuing
    //make sure that you also set up how you want your page to look like in views ejs file, in this situation we are working with scheduling 

    //but first, lets make sure that we test that we are routing to the right location 
    res.render('appointments/scheduling') //it will show us the scheduling page
}

// // //ANOTHER THING
// // // I think we might need to move the login/google authentification functions here for organization purposes. 
// // //I am still trying to figure out if I want patients to log in before filling out information, or after. 

function create(req, res){ //creating the actual appoibtnent document in data base

// req.boy is the content coming from the form. 
    req.body.userId = req.user._id;  
//req.user id adding to the req.body form (adding another property name user id)
//gicing userId the value to the user that is logged in which it ._id
    AppointmentModel.create(req.body)//reffecrencing our model and then we are using
    //that to create a doc inside out database (the actual appoitment)
    .then(function(appointment){//after it is created (app parameter is the document that 
        //was created in our database) 
        console.log(appointment)//this doesnt have to be here but it is allowin us 
        //to check our work /// can only be seen in terminal 

        res.redirect('/appointments/index');//after creating appointment I to be redirected to my appointments
//redirect this physically shows the appointment on our desired views page 
    }).catch((err) => { //this will give you an error if appointmetn is not created 
        console.log(err);
        res.send('ERROR')

    })
}



function index(req, res){
    // req.body.userId = req.user._id; // not needed
    AppointmentModel.find({userId:req.user._id}) //we are going into the database 
    //and looking for the appointment that the currently logged in user created

        .then(function(allPatientAppointments) { //after we find it 
            //all patient appointments will be an array of appoibtment created by the currently
            // logged in user
            console.log(allPatientAppointments)
            
            res.render('appointments/index', {appointments: allPatientAppointments}) 
            // this will send us to our views file and find index to then show the document
            //{appointments : allpta} we are defining a variable that we can user inside 
            //of our index ejs file ( the calue of that is all of the single patient appoinemtns
            // appointment variable is used in ejs file to show all the appts
        }).catch(function(err){
            console.log(err);
            res.send(err)
        })//we finished at the index file (cause render )
}


//CONTROLLER FUNCTIONS ALWAYS RENDER TO THE VIEWS FILES



async function cancelAppointment(req, res) {
    //finding the appointment by user id first
    try {
          await AppointmentModel.findOneAndDelete({_id: req.params.id
////we are going into database to find appointment by ID ^ then it will cancal it 
})
res.redirect('/appointments/index')  // this this is going to send us back to the index route 
//and trigger out index function to then display the new array of appoitntments minus the 
//cancelled one 

    }catch(err){
    console.log(err);
    // res.send(err)
}
}
  


