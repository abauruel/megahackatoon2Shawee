const Sequelize = require('sequelize');

const Company = require('../app/models/Company');
const Category = require('../app/models/Category');
const Payment_method = require('../app/models/Payment_method');
const Budget = require('../app/models/Budget');

const databaseConfig = require('../config/database');

const models = [Company, Category, Payment_method, Budget];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

module.exports = new Database();
