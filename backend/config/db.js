const mongoose = require("mongoose");

const dbUrl = process.env.ATLASDB_URL;
async function connectDB() {
  try {
    await mongoose.connect(dbUrl);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
