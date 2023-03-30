//we start by requiring our model 

const AppointmentModel = require('../models/appointment');

//we need to export desired funcion name 

module.exports = {
    edit: editAppointment,
    addProvider
    // update: submitProvider
}


//create a function that will allow us to take the provider schema 

async function addProvider(req, res) {
    try{
        const appointment = await AppointmentModel.findById(req.params.id) 
        req.body.userId = req.user._id
        appointment.provider.push(req.body)
        await appointment.save()
    } catch(err) {
        console.log(err, '<- this is the add provider error');
    }

 
}


//  async function submitProvider(req, res) {
    
// try {
    
//     const addedProvider = await Appointment.findOneAndUpdate(
//          {_id: req.params.id, userPrefferences: req.user._id},
//         // update object with updated properties
//         req.body,
//         // options object {new: true} returns updated doc
//         {new: true}
//       );
//       return res.redirect(`/index/${addedProvider._id}`);
//     }catch(err){
//         console.log(err);
//    }
// }

// // always render to the desired show page

// function submitProvider() {
//     console.log(re.body);

// AppointmentModel.findOneAndUpdate(req.params.id)

//     .then(function(appointmentDoc) {
//         console.log(appointmentDoc);



//         req.body.medicalProvider = req.user.provider;



//         appointmentDoc.save().then(function () {
//         return res.redirect(`/index/${addedProvider._id}`);
//     });


//     })
//     .catch((err) => {
//         console.log(err);
//         res.send(err);
//       });

// }



// .then(function(appointmentDoc){
//     console.log(appointmentDoc, '<--this is appointmetn doc');
//     if(!appointmentDoc) return res.redirect('/appointments');

//     appointmentDoc.remove(req.params.id);
// //this removes the appointment but we have to update changes in database
// appointmentDoc.save().then(function(){
    
//})





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