import { Sequelize } from 'sequelize-typescript';
import { Phone, PhoneDetails } from '../models';
import dotenv from 'dotenv';
dotenv.config();


export const sequelize = new Sequelize('product_catalog-DB', 'postgres', '35916', {
  host: 'localhost',
  dialect: 'postgres',
  models: [Phone, PhoneDetails],
  logging: console.log, 
});

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
