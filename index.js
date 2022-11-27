const express  = require("express");

const app = express();

const mongoose = require("mongoose");

Book = require('./api/model');
bodyParser = require('body-parser');

const port = 3001;

//db connection
const mongoDB = "mongodb://127.0.0.1/books";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
    console.log("Connected successfully");
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes');

routes(app);

app.listen(port, () => console.log(`App is running on port ${port}`));

var router = express.Router();

app.use('/',router);