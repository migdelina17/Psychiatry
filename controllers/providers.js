//we start by requiring our model 

const AppointmentModel = require('../models/appointment');

//we need to export desired funcion name 

module.exports = {
    edit: editAppointment,
    update: addProvider
    // update: changeProvider
}





function editAppointment(req, res) {
//we are running the mongoose function to find the document/appoitnment by id
    AppointmentModel.findById(req.params.id)
    .then(function(appointmentDoc) { //once found appointment = appointmentDoc

        console.log(appointmentDoc);
        res.render('appointments/providers', { // now it will show that appointment /appdoc 
            //physically in the provioders page/ providers ejs
            appointment: appointmentDoc //we giving value to app doc  to use in 
        });
    }).catch((err) =>{
    console.log(err);
    res.send(err)
  })
}




//create a function that will allow us to take the provider schema 

async function addProvider(req, res) {
    try{ //finds the appt by id in database
        const appointment = await AppointmentModel.findById(req.params.id) 
        req.body.userId = req.user._id  
        // // appointment.provider.push(req.body) //this would 
        appointment.provider[0]= req.body //this makes us only have one provider at a time
        //we are taking req.body and setting that to the first index of app.provider array
        
        
        await appointment.save()
        res.redirect('/appointments/index') //triggers index route & funcion in appts, which then renders back to index ejs/my appointments 
    } catch(err) {
        console.log(err, '<- this is the add provider error');
    }

 
}

//provider was made an array in appoibntment schema and we are setting it to index of 0

//the [0] is making us only have one provider at a time, it wont let us pile up
// we are only giving one slot (index)