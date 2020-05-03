<<<<<<< HEAD
require('dotenv').config();
=======
require('./database');

>>>>>>> ec4750033de2387f28d2b4b42e6d51d454617aac
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware() {
<<<<<<< HEAD
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: true }));
=======
>>>>>>> ec4750033de2387f28d2b4b42e6d51d454617aac
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
