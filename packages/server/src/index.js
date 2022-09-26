import express from 'express';
import cors from 'cors';
require('dotenv').config();
//==============================================
import { errorHandlers } from './middleware';
import router from './routers';
const db = require('./db/models');

const app = express();
const PORT = process.env.PORT || 5000;
const DB = process.env.DB_NAME;

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(
	errorHandlers.validationErrorHandler,
	errorHandlers.sequelizeErrorHandler,
	errorHandlers.errorHandler,
);

const checkDB = async () => {
	try {
		await db.sequelize.authenticate();
		console.log(`Connection has been established successively to ${DB}`);
	} catch (error) {
		console.log(`Unable to connect to the database: ${error.message}`);
	}
};
const createDB = async () => {
	try {
		await db.sequelize.drop({ cascade: true });
	} catch (error) {
		console.log(`Ошибка: ${error.message}`);
	}
	try {
		await db.sequelize.sync();
	} catch (error) {
		console.log(`Ошибка: ${error.message}`);
	}
};

checkDB();
// createDB();

app.listen(
	PORT,
	console.log(
		`Server has been started at http://localhost:${PORT}, press Ctrl-C to terminate....`,
	),
);
