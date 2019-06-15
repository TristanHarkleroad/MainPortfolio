const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.engine(
  "handlebars", 
  exphbs({ 
  defaultLayout: "main.handlebars" 
  })
);
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


module.exports = app;