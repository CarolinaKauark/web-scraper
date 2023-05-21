const {
  Schema,
  model,
} = require('mongoose');

const ProdutoSchema = new Schema ({
    photo: { type: String },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number },
    website: { type: String },
    query: { type: String, required: true}
});

const MercadoLivre = model('mercado', ProdutoSchema);
const Buscape = model('buscape', ProdutoSchema);

module.exports = { MercadoLivre, Buscape };