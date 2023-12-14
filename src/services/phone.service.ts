import { Phone } from '../models/Phone';
import { PhoneDetails } from '../models/PhoneDetails';
import { DEFAULT_PER_PAGE } from '../utils/constats';

enum SortByType {
  Newest = 'newest',
  Cheapest = 'cheapest',
  Name = 'name',
}

interface PhonesQueryParams {
  sortBy?: SortByType;
  page?: number;
  perPage?: number | 'all';
}

export const findAll = async (queryParams: PhonesQueryParams) => {
  const { sortBy, page = 1, perPage = DEFAULT_PER_PAGE } = queryParams;

  switch (sortBy) {
    case 'name':
      return Phone.findAndCountAll({
        offset: page * Number(perPage),
        limit: Number(perPage),
        order: [['name', 'ASC']],
      });

    case 'newest':
      return Phone.findAndCountAll({
        offset: page * Number(perPage),
        limit: Number(perPage),
        order: [['year', 'DESC']],
      });

    case 'cheapest':
      return Phone.findAndCountAll({
        offset: page * Number(perPage),
        limit: Number(perPage),
        order: [['price', 'ASC']],
      });

    default:
      return Phone.findAndCountAll({
        offset: page * Number(perPage),
        limit: Number(perPage),
        order: [['name', 'ASC']],
      });
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
