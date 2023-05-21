const {
  Schema,
  model,
} = require('mongoose');

const ProdutoSchema = new Schema ({
    photo: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    website: { type: String, required: true },
});

const MercadoLivre = model('Mercado', ProdutoSchema);
const Buscape = model('buscapé', ProdutoSchema);

module.exports = { MercadoLivre, Buscape };