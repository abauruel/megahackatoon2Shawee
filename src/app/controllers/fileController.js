const File = require('../models/File');

module.exports = {
  async store(req, res) {
    const { files } = req;
    const filesCreated = await File.bulkCreate(files);

    return res.json(filesCreated);
  },
};
