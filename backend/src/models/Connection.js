const mongoose = require('mongoose');
require('dotenv').config();

// const MONGO_DB_URL = 'mongodb://localhost:27017/WebScraper';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
) => mongoose.connect(mongoDatabaseURI);

module.exports = connectToDatabase;