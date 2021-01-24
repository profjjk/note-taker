// DEPENDENCIES
// ====================================================
var express = require('express');


// EXPRESS CONFIGURATION
// ====================================================
// Create server named "app".
var app = express();
// Get designated PORT from remote server, or default.
var PORT = process.env.PORT || 3000;
// Prepare for parsing urlencoded data and JSON data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTERS
// ====================================================
// Route server to api data.
require("./routes/apiRoutes")(app);
// Route server to html data.
require("./routes/htmlRoutes")(app);


// LISTENER
// ====================================================
// Start the server listening on designated PORT.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})