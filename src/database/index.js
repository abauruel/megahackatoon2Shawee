const Sequelize = require('sequelize');

const Company = require('../app/models/Company');
const Category = require('../app/models/Category');
const Payment_method = require('../app/models/Payment_method');

const dbConfig = require('../config/database');

const models = [Company, Category, Payment_method];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
