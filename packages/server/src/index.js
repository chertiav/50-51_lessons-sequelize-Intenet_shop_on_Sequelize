import express from 'express';
import cors from 'cors';
require('dotenv').config();
//==============================================
import {errorHandlers} from './middleware';
import router from './routers';
const db = require('./db/models');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(errorHandlers.errorHandler);

const  checkDB = async () => {
	try{
		await db.sequelize.authenticate();
		console.log('Соединение с БД было успешно установлено');
	} catch (error) {
		console.log(`Невозможно выполнить подключение к БД: ${error.message}`);
	}
}
const createDB = async () => {
	try {
		await db.sequelize.drop({cascade:true})
	} catch (error) {
		console.log(`Ошибка: ${error.message}`);
	}
	try {
		await db.sequelize.sync();
	} catch (error) {
		console.log(`Ошибка: ${error.message}`);
	}
}

checkDB();
// createDB();

app.listen(PORT, console.log(`Server has been started at http://localhost:${PORT}, press Ctrl-C to terminate....`));


