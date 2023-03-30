//we start by requiring our model 

const AppointmentModel = require('../models/appointment');

//we need to export desired funcion name 

module.exports = {
    edit: editAppointment,
    update: addProvider
}


//create a function that will allow us to take the provider schema 

function editAppointment(req, res) {

    AppointmentModel.findById(req.params.id)
    .then(function(appointmentDoc) {

        console.log(appointmentDoc);
        res.render('appointments/providers', {
            appointment: appointmentDoc
        });
    }).catch((err) =>{
    console.log(err);
    res.send(err)
  })
}


   

async function addProvider(req, res) {
    try {
      const updateAppointment = await Appointment.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      );
      return res.redirect(`/index/${updatedBook._id}`);
    }catch(err){
        console.log(err);
  }
}
