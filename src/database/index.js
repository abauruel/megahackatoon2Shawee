const Sequelize = require('sequelize');

const Company = require('../app/models/Company');

const dbConfig = require('../config/database');

const models = [Company];

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
