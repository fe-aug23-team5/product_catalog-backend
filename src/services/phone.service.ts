import { Phone } from '../models/Phone';
import { PhoneDetails } from '../models/PhoneDetails';
import { DEFAULT_PER_PAGE } from '../utils/constats';
import { Op } from 'sequelize';


enum SortByType {
  Newest = 'newest',
  Cheapest = 'cheapest',
  Name = 'name',
}

interface PhonesQueryParams {
  sortBy?: SortByType;
  page?: string;
  perPage?: string | 'all';
  order?:"ASC"|"DESC";
  query?:string;
}

export const findAll = async (queryParams: PhonesQueryParams) => {
  const { sortBy, page = '1', perPage = DEFAULT_PER_PAGE, order = 'ASC', query='' } = queryParams;

  let normalizedPage = 0;
  if (page !== '0') {
    normalizedPage = +page - 1;
  }

 try {
  switch (sortBy) {
    case 'name':
      return Phone.findAndCountAll({
        where: {
          name: { [Op.iRegexp ]: query },
        },
        offset: normalizedPage * Number(perPage),
        limit: Number(perPage),
        order: [['name', order]],
      });

    case 'newest':
      return Phone.findAndCountAll({
        where: {
          name: { [Op.iRegexp ]: query },
        },
        offset: normalizedPage * Number(perPage),
        limit: Number(perPage),
        order: [['year', order==='ASC'?'DESC':'ASC']],
      });

    case 'cheapest':
      return Phone.findAndCountAll({
        where: {
          name: { [Op.iRegexp ]: query },
        },
        offset: normalizedPage * Number(perPage),
        limit: Number(perPage),
        order: [['price', order]],
      });

    default:
      return Phone.findAndCountAll({
        where: {
          name: { [Op.iRegexp ]: query },
        },
        offset: normalizedPage * Number(perPage),
        limit: Number(perPage),
        order: [['name', order]],
      });
  }
 } catch(e) {
  console.error("Search Params Error", e);
  return {count:0, rows:[]};
 }
};

export const getById = async (id: string): Promise<PhoneDetails | null> =>
  PhoneDetails.findByPk(id);

export const findNew = async () => {
  return Phone.findAll({
    order: [['year', 'DESC']],
    limit: 20,
  });
};

export const findRecommended = async () => {
  return Phone.findAll({
    order: [['fullPrice', 'ASC']],
    limit: 20,
  });
};

export const findDiscount = async () => {
  const allPhones = await Phone.findAll();
  const maxDiscoun = allPhones.sort(
    (phone1, phone2) =>
      phone2.fullPrice - phone2.price - (phone1.fullPrice - phone1.price)
  );
  return maxDiscoun.slice(0, 20);
};
