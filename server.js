// DEPENDENCIES
// ====================================================
var express = require('express');


// SERVER CONFIGURATION
// ====================================================
// Create server
var app = express();

// Listen for port, or default.
var PORT = process.env.PORT || 3000;

// Body parsers.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTERS
// ====================================================
// Route to api.
require("./routes/apiRoutes")(app);
// Route to html.
require("./routes/htmlRoutes")(app);


// LISTENER
// ====================================================
// Start the server listening on designated PORT.
app.listen(PORT, () => console.log("Server listening on port " + PORT))