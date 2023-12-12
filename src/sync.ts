import { Phone, PhoneDetails } from './models';
import { sequelize } from './utils/initDb';
import phones from '../public/phones.json';

export const sync = async () => {
  console.log('Models have been synchronized.');
  return sequelize.sync({ force: true });
};

 export const seedPhones = async () => {
  return Phone.bulkCreate(phones);
};

sync().then(seedPhones)
.catch(err=>console.log("SYNC ERROR:", err)); 

