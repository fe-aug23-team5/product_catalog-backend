import { Product } from '../models/Product';

export const findNew = async () => {
  return Product.findAll({
    order: [['year', 'DESC']],
    limit: 20,
  });
};

export const findRecommended = async () => {
  return Product.findAll({
    order: [['fullPrice', 'ASC']],
    limit: 20,
  });
};

export const findDiscount = async () => {
  const allProducts = await Product.findAll();
  const maxDiscoun = allProducts.sort(
    (prod1, prod2) =>
      prod2.fullPrice - prod2.price - (prod1.fullPrice - prod1.price)
  );
  return maxDiscoun.slice(0, 20);
};
