const mongoose = require('mongoose');

// replace your database connection string here
mongoose.connect(process.env.DATABASE_URL);
//mongodb://127.0.0.1/Appointments was given a value of DATABASE_URL in .env folder
// Technically, instead of naming our model here, we are doing it in .env
//This here is allowing me to create a connecte


const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
