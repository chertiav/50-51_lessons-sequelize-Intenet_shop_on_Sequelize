const { Op } = require('sequelize');
const db = require('./models');
const {customers} = require('./constants/internetShop-db-constants');

(async function(){
	try{
		await db.sequelize.authenticate();
		console.log('Соединение с БД было успешно установлено');
	} catch (error) {
		console.log(`Невозможно выполнить подключение к БД: ${error.message}`);
	}

	// try {
	// 	await db.sequelize.drop({cascade:true})
	// } catch (error) {
	// 	console.log(`Ошибка: ${error.message}`);
	// }

	try {
		await db.sequelize.sync();
	} catch (error) {
		console.log(`Ошибка: ${error.message}`);
	}

	try{
	const customersDataBase = await db.Customer.bulkCreate(customers, {
		raw: true,
		fields: ['name', 'email', 'password', 'description'],
		returning: ['id', 'name', 'email', 'password', 'description']
	})
		console.log(JSON.stringify(customersDataBase, null, 2));
	} catch (error) {
		console.log(`Ошибка: ${error.message}`);
	}

})()


