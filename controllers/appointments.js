

const AppointmentModel = require('../models/appointment'); 


module.exports = {
    new: scheduling,
    create,
    index: myAppointments,
    delete: cancelAppointment
}


function scheduling(req, res) { //gets the page

    
    res.render('appointments/scheduling') //it will show us the scheduling page (views/scheduling)
}//this is a rendering to file in folder NOT  browser address



function create(req, res){ //creating the actual appointnent document in data base

// req.body is the content coming from the form. (the details that we will attach to app we are creating)
    req.body.userId = req.user._id; 
//req.user is adding to the req.body form (adding another property name user id)
//giving userId the value to the user that is logged in which it ._id
    AppointmentModel.create(req.body)//reffecrencing our model and then we are using
    //that to create a doc inside our database (the actual appoitment)
    .then(function(appointment){//after it is created (app parameter is the document that 
        //was created in our database) 

        res.redirect('/myappointments');//after creating appointment I to be redirected to my appointments

    }).catch((err) => { //this will give you an error if appointmetn is not created 
        console.log(err);
        res.send('ERROR')

    })
}



function myAppointments(req, res){
    
    AppointmentModel.find({userId:req.user._id}) //we are going into the database 
    //and looking for the appointment that the currently logged in user created

        .then(function(allPatientAppointments) { //after we find it 
            //all patient appointments will be an array of appointment created by the currently
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
////we are going into database to find appointment by ID ^ then it will cancel it 
})
res.redirect('/myappointments')  // this this is going to send us back to the index route 
//and trigger out index function to then display the new array of appoitntments minus the 
//cancelled one 

    }catch(err){
    console.log(err);
    res.send(err)
}
}   
  


