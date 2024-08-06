const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "development": {
      "username": "root",
      "password": process.env.DB_PW,
      "database": "myPlanterior",
      "host": "127.0.0.1",
      // host.docker.internal // in docker
      "dialect": "mariadb"
    },
    "test": {
      "username": "",
      "password": "",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mariadb"
    },
    "production": {
      "username": "root",
      "password": process.env.DB_PW,
      "database": "myPlanterior",
      "host": "myplanteriorbe-db-server-1",
      "dialect": "mariadb"
    }
  }
  