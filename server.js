//required dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//set port
const PORT = process.env.PORT || 3000;

//require db
const db = require("./models");

//setup express
const app = express();

//logger 
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set static public
app.use(express.static("public"));

//mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//require routes
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);

//listening on port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
