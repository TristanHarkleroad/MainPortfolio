const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3206;

app.engine(
  "handlebars", 
  exphbs({ 
  defaultLayout: "main" 
  })
);
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

require('./routes/htmlRoutes')(app);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: localhost:" + PORT);
});


module.exports = app;