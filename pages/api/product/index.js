import nc from 'next-connect';
import fs from 'fs';
const handler = nc({ attachParams: true });
import { getAllProducts } from './productController';

handler.get(getAllProducts);
handler.get('/single', (req, res, next) => {
  res.send('this milyo');
});

export default handler;
