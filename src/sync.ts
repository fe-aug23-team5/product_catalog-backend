import { Phone, PhoneDetails } from './models';
import { PhoneDetailsType } from './types/PhoneDetailsType';
import { sequelize } from './utils/initDb';
import phones from '../public/phones.json';
import { combineJSON } from '../src/utils/combineJSON';

export const sync = async () => {
  console.log('Models have been synchronized.');
  return sequelize.sync({ force: true });
};

export const seedPhones = async () => {
  return Phone.bulkCreate(phones);
};

export const seedPhoneDetails = async () => {
  const folderPath = './public/phones';
  const combinedPhones: PhoneDetailsType[] = combineJSON(folderPath);
  const filteredDetails = combinedPhones.filter(el=> Boolean(el?.id))
  return PhoneDetails.bulkCreate(filteredDetails);
};

sync()
  .then(seedPhones)
  .then(seedPhoneDetails)
  .catch((err) => console.log('SYNC ERROR:', err));
