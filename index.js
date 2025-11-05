// Setup express and ejs
var express = require("express");
var ejs = require("ejs");

// Create the express application object
const app = express();
const port = 8000;

// Tell Express that we want to use EJS as the templating engine
app.set("view engine", "ejs");

// Set up the body parser (for POST forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files (for styles.css)
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Load the route handlers
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// Optional health check
app.get("/healthz", (_req, res) => res.status(200).send("ok"));

// Start the web app listening
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
