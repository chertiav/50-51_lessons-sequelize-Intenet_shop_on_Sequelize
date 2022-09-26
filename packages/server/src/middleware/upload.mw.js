const multer = require('multer');
const path = require('path');
//===============================
const { static_path } = require('../config/config');

const storageCustomerImage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve(static_path, './images'));
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

const filterCustomerImage = (req, file, cb) => {
	const MIMTYPE_REGEXP = /^image\/(jpeg|png|gif)$/;
	MIMTYPE_REGEXP.test(file.mimetype) ? cb(null, true) : cb(null, false);
};

module.exports.uploadCustomerImage = multer({
	storage: storageCustomerImage,
	fileFilter: filterCustomerImage,
});
