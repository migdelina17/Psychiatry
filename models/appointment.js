

const mongoose = require("mongoose"); //<--this connects to the MongoDB/database 



//providerSchema is used to change provider in our appointment & is embedded in appointmentSchema
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



//we started by creating a schema for appointment scheduling
//this is specific information used to create/save an appointment in MongoDataBase
const appointmentSchema = new mongoose.Schema({
    name: {
        type: String, 
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

    provider: [providerSchema], // provider = providerSchema array []

    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

//model --> collection
//schema --> document

module.exports = mongoose.model("Appointment", appointmentSchema);
//this is the line of code where we are creating a MODEL.
//We pass on the appointmentSchema variable and we give it a name of Appointment, 
//which MANGODB then pluririzes and makes it all lower case. 

//when we create a model, it'll create a collection in mongo DB (model-->collection)
