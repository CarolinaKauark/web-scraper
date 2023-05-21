const errorGenerate = require('../helpers/errorGenerate');

const postMiddleware = (req, res, next) => {
  const { web, category, query} = req.body;

  if (!web || !category || !query) {
    throw errorGenerate(400, 'Some required fields are missing');
  }

  next();
};

module.exports = postMiddleware;