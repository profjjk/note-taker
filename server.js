// DEPENDENCIES
// ====================================================
const express = require('express');


// SERVER CONFIGURATION
// ====================================================
// Create server
const app = express();

// Listen for port, or default.
const PORT = process.env.PORT || 3000;

// Body parsers.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTERS
// ====================================================
require("./routes/apiRoutes")(app); // Route to api.
require("./routes/htmlRoutes")(app); // Route to html.


// LISTENER
// ====================================================
// Start the server listening on designated PORT.
app.listen(PORT, () => console.log("Server listening on port " + PORT));