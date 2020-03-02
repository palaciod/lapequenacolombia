const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/database");
const app = express();

// Map Global promise, to get rid of warning
mongoose.Promise = global.Promise;

// Connect to Mongoose
mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch(err => console.log(err));

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const port = 5000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
