const mongoose = require("mongoose");

// export the function that creates a database connection
module.exports = {
  connectDB,
};

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (err) {
    console.log("err");
    console.log(err, ' connecting to mongodb')
    process.exit(1);
  }
}








// //we are stablishing a connection between
// const mongoose = require('mongoose');

// // replace your database connection string here
// mongoose.connect(process.env.DATABASE_URL);
// //mongodb://127.0.0.1/Appointments was given a value of DATABASE_URL in .env folder
// // Technically, instead of naming our model here, we are doing it in .env
// //This here is allowing me to create a connecte


// const db = mongoose.connection;

// // database connection event
// db.on('connected', function () {
//   console.log(`Mongoose connected to: ${db.host}:${db.port}`);
// });
