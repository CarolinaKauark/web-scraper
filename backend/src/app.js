const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const router = require('./routes/products.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors(
  {
    origin: true,
    credentials: true
  })
);

//bigger time out to allow time to the webscraper
app.use(function(req, res, next) {
  res.setTimeout(300);
  next();
});

app.use(router);

app.use(errorMiddleware);


module.exports = app;
