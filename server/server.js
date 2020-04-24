// Imports
const express = require("express");
const webRoutes = require("./routes/web");
var bodyParser = require("body-parser");

// Express app creation
const app = express();

// Configurations
const appConfig = require("./configs/app");

// Receive parameters from the Form requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for static files
app.use("/", express.static(__dirname + "/public"));

// Routes
app.use("/", webRoutes);

// App init
app.listen(appConfig.expressPort, () => {
  console.log(
    `Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`
  );
});
