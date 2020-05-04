const Sequelize = require('sequelize');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

class File extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        key: Sequelize.STRING,
        url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (file) => {
      if (!file.url) {
        file.url = `${process.env.APP_URL}/files/${file.key}`;
      }
    });
    this.addHook('beforeDestroy', async (file) => {
      if (process.env.STORAGE_TYPE === 's3') {
        return s3.deleteObject({
          Bucket: process.env.AWS_BUCKET,
          key: file.key,
        });
      }
      return promisify(fs.unlink)(
        path.resolve(__dirname, '..', '..', 'tmp', 'uploads', file.key)
      );
    });
  }
}

module.exports = File;
