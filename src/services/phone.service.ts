import { Product } from '../models/Product';
import { PhoneDetails } from '../models/PhoneDetails';
import { DEFAULT_PER_PAGE } from '../utils/constats';
import { Op } from 'sequelize';
import { QueryParams } from '../types/QueryParams';

export const findAll = async (queryParams: QueryParams) => {
  const {
    sortBy,
    page = '1',
    perPage = DEFAULT_PER_PAGE,
    order = 'ASC',
    query = '',
  } = queryParams;

  let normalizedPage = 0;
  if (page !== '0') {
    normalizedPage = +page - 1;
  }

  try {
    switch (sortBy) {
      case 'name':
        return Product.findAndCountAll({
          where: {
            category: { [Op.eq]: 'phones' },
            name: { [Op.iRegexp]: query },
          },
          offset: normalizedPage * Number(perPage),
          limit: Number(perPage),
          order: [['name', order]],
        });

      case 'newest':
        return Product.findAndCountAll({
          where: {
            category: { [Op.eq]: 'phones' },
            name: { [Op.iRegexp]: query },
          },
          offset: normalizedPage * Number(perPage),
          limit: Number(perPage),
          order: [['year', order === 'ASC' ? 'DESC' : 'ASC']],
        });

      case 'cheapest':
        return Product.findAndCountAll({
          where: {
            category: { [Op.eq]: 'phones' },
            name: { [Op.iRegexp]: query },
          },
          offset: normalizedPage * Number(perPage),
          limit: Number(perPage),
          order: [['price', order]],
        });

      default:
        return Product.findAndCountAll({
          where: {
            category: { [Op.eq]: 'phones' },
            name: { [Op.iRegexp]: query },
          },
          offset: normalizedPage * Number(perPage),
          limit: Number(perPage),
          order: [['name', order]],
        });
    }
  } catch (e) {
    console.error('Search Params Error', e);
    return { count: 0, rows: [] };
  }
};

export const getDetailsById = async (
  id: string
): Promise<PhoneDetails | null> => await PhoneDetails.findByPk(id);

export const getById = async (id: number): Promise<Product | null> =>{
  const product =  await Product.findByPk(id);
  if(product?.category!=='phones') {
    return null;
  }
  return product;
}
  
