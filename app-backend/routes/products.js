import express from 'express';
import { Product } from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  let search = req.query.search;
  let products = await Product.findAll();

  if (search) {
    search = search.toLowerCase();

    products = products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(search);
      const keywordsMatch = product.keywords.some(keyword => keyword.toLowerCase().includes(search));
      return nameMatch || keywordsMatch;
    });
  }

  res.json(products);
});

export default router;