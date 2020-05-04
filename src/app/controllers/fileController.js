const File = require('../models/File');

module.exports = {
  async store(req, res) {
    const { location: url, key, originalname: name } = req.file;
    const file = await File.create({
      name,
      key,
      url,
    });
    return res.json(file);
  },
};
