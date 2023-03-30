//This is where we will be creating our schema for patient to input specific information
//to be able to create an appointment. 

// //This is also where we will connect to our mongo Data Base to be able to save our appointment information 
// const mongoose = require('mongoose'); //--this connects to the database 

const mongoose = require("mongoose");


//we started by creating a schema for appointment scheduling

//now we will create a schema that we want to update our provider with 
//we will then embed it into our model appointmentschema

const providerSchema = new mongoose.Schema({
    provider: {
        type: String,
        enum: ['Eduardo Hernandez, MD', 'Jessica Parlor, D.O.', 'Skye James, P.A.',
    'Alejando Clayton, N.P.', 'Cynthia Boyd, MD', 'Snow Winters, N.P']
    },
    insurance: {
        type: String,
        enum: ['BlueCross', 'Medicare', 'Aetna']
    },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
})




//we are creating an appointment scheme //we started with this
const appointmentSchema = new mongoose.Schema({
    name: {
        type: String, //text box
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        enum: ['Passyunk', 'Fishtown', 'Center City', 'Manayunk'],
        required: true
    },
    date: {
        type: Date,
        default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() +1))
    },
    required: true
    },

    provider: [providerSchema],

    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

//we need to finish up by creating a collection in our database named appointment
//every appointment we create will have the appointment schema above 

module.exports = mongoose.model("Appointment", appointmentSchema);
//this is the line of code where we are creating a MODEL. MODEL=collection
//We pass on the appointmentSchema variable and we give it a name of Appointment, 
//which MANGODB then pluririzes and makes it all lower case. It is showing more 
//than one appointment 

//when we create a model, it'll create a collection in mongo DB
//as stated above model=collection

//mongoose.model("Appointment", appointmentSchema); 
//this line of code returns an object that we are exporting,
//and that object is our model