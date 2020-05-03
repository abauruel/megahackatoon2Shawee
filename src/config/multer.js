const multer = require('multer');
const multers3 = require('multer-s3');
const aws = require('aws-sdk');
const crypto = require('crypto');
const path = require('path');

aws.config.update({
  secretAccessKey: process.env.SECRETACCESSKEY,
  accessKeyId: process.env.ACCESSKEYID,
  region: process.env.REGION,
});

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },

    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err);

        return cb(null, `${hash.toString('hex')}-${file.originalname}`);
      });
    },
  }),
  s3: multers3({
    s3: new aws.S3(),
    bucket: 'bucketcotacoesapp',
    contentType: multers3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err);

        return cb(null, `${hash.toString('hex')}-${file.originalname}`);
      });
    },
  }),
};

module.exports = {
  storage: storageTypes.s3,
  limits: { fileSize: 4 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
};
