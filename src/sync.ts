import { Product, PhoneDetails, AccessoryDetails, TabletDetails } from './models';
import { sequelize } from './utils/initDb';
import products from '../public/products.json';
import phones from '../public/phones.json';
import tablets from '../public/tablets.json';
import accessories from '../public/accessories.json';


export const sync = async () => {
  console.log('Models have been synchronized.');
  return sequelize.sync({ force: true });
};

export const seedProducts = async () => {
  return Product.bulkCreate(products);
};
export const seedPhones = async () => {
  return PhoneDetails.bulkCreate(phones);
};
export const seedTablets = async () => {
  return TabletDetails.bulkCreate(tablets);
};
export const seedAccessories = async () => {
  return AccessoryDetails.bulkCreate(accessories);
};


sync()
  .then(seedProducts)
  .then(seedPhones)
  .then(seedTablets)
  .then(seedAccessories)
  .catch((err) => console.log('SYNC ERROR:', err));
