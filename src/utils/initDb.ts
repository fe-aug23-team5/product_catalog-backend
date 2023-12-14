import { Sequelize } from 'sequelize-typescript';
import { Phone, PhoneDetails } from '../models';
import dotenv from 'dotenv';
dotenv.config();
const URI =
  'postgres://coder:HPcZ08ViOnf90WiP5kM7EvL8kXnJtwWU@dpg-cls4n0fqd2ns73dvsomg-a.frankfurt-postgres.render.com/productcatalogdb';
 
export const sequelize = new Sequelize(process.env.DB_LINK ? process.env.DB_LINK : URI, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {ssl: true},
  models: [Phone, PhoneDetails],
  logging: console.log,
   define: {
    timestamps: false
  },
}); 

/* export const sequelize = new Sequelize('product_catalog-DB', 'postgres', '35916', {
  dialect: 'postgres',
  protocol: 'postgres',
  models: [Phone, PhoneDetails],
  logging: console.log,
  define: {
    timestamps: false
  },
});  */

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
