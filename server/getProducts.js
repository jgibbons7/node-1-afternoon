const products = require('../products.json')

module.exports = {
  getProducts: (req, res) => {
    if (req.query.price) {
      const filtered = products.filter(elem => elem.price >= +req.query.price);
      return res.status(200).send(filtered);
    } else {
    res.status(200).send(products);
    }
  },

  getProductById: (req, res) => {
    const {id} = req.params
    const idFind = products.find(element => element.id == id)
    
    if (idFind){
      res.status(200).send(idFind)
    } else {
      res.status(500).send('Item not in the list')
    }
  }
}
