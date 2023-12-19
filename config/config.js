const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const development = {
  password: "35916",
  database: "product_catalog-db",
  host: '127.0.0.1',
  dialect: "postgres",
  user: "postgres",
  };

const cloud = {
    url: 'postgres://coder:HPcZ08ViOnf90WiP5kM7EvL8kXnJtwWU@dpg-cls4n0fqd2ns73dvsomg-a.frankfurt-postgres.render.com/productcatalogdb',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  };

module.exports = {
  development: { ...cloud },
  test: { ...cloud},
  production: { ...cloud}
};