const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

routes.post('/teste', upload.single('file'), (req, res) => {
  return res.json({ message: 'SendFileAWS' });
});

module.exports = routes;
