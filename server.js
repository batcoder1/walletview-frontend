const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
const port = process.env.PORT | 5000
app.use(express.static('dist'));
// For all GET requests, send back index.html
// so that PathLocationStrategy can be use
app.get('/*', function(req, res) {
    app.use(express.static(__dirname + '/dist'));
});
// Start the app by listening on the default
// Heroku portgit
app.listen(port , function() {
    console.log("Server started in port: " + port + ".......");
});