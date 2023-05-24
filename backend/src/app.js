const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const router = require('./routes/products.routes');

const app = express();
// app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    app.use(cors());
    next();
});

//bigger time out to allow time to the webscraper
app.use(function(req, res, next) {
  res.setTimeout(300);
  next();
});

app.use(router);

app.use(errorMiddleware);


module.exports = app;
