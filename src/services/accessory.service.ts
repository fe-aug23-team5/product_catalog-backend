import { Product } from '../models/Product';
import { AccessoryDetails } from '../models/AccessoryDetails';
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
            category: { [Op.eq]: 'accessories' },
            name: { [Op.iRegexp]: query },
          },
          offset: normalizedPage * Number(perPage),
          limit: Number(perPage),
          order: [['name', order]],
        });

      case 'newest':
        return Product.findAndCountAll({
          where: {
            category: { [Op.eq]: 'accessories' },
            name: { [Op.iRegexp]: query },
          },
          offset: normalizedPage * Number(perPage),
          limit: Number(perPage),
          order: [['year', order === 'ASC' ? 'DESC' : 'ASC']],
        });

      case 'cheapest':
        return Product.findAndCountAll({
          where: {
            category: { [Op.eq]: 'accessories' },
            name: { [Op.iRegexp]: query },
          },
          offset: normalizedPage * Number(perPage),
          limit: Number(perPage),
          order: [['price', order]],
        });

      default:
        return Product.findAndCountAll({
          where: {
            category: { [Op.eq]: 'accessories' },
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

export const getById = async (id: string): Promise<AccessoryDetails | null> =>
  AccessoryDetails.findByPk(id);
