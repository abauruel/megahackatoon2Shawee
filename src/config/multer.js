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

    name: (req, file, cb) => cb(null, file.originalname),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err);

        file.name = file.originalname;
        file.key = `${hash.toString('hex')}-${file.originalname}`;
        file.url = `${process.env.APP_URL}/files/${file.key}`;
        return cb(null, file.key);
      });
    },
  }),
  s3: multers3({
    s3: new aws.S3(),
    bucket: process.env.AWS_BUCKET,
    contentType: multers3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err);
        file.name = file.originalname;
        return cb(null, `${hash.toString('hex')}-${file.originalname}`);
      });
    },
  }),
};

module.exports = {
  storage: storageTypes[process.env.STORAGE_TYPE],
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
