import nc from 'next-connect';
import { getSingleProduct } from './productController';
const handler = nc({ attachParams: true });

handler.get(getSingleProduct);

export default handler;
