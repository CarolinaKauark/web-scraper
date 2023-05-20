const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  const mock = [ 
    {
      photo: '',
      description: 'A tv samsung led',
      category: 'tv',
      price: '300',
      website: 'mercado livre',
    },
    {
      photo: '',
      description: 'Other tv samsung led',
      category: 'tv',
      price: '400',
      website: 'mercado livre',
    },
    {
      photo: '',
      description: 'Another tv samsung led',
      category: 'tv',
      price: '500',
      website: 'mercado livre',
    }
  ]
  return res.status(200).json(mock) 
})


module.exports = app;
