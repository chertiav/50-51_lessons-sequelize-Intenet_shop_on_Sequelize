const { Op } = require('sequelize');
const db = require('./models');

(async function(){
	try{
		await db.sequelize.authenticate();
		console.log('Соединение с БД было успешно установлено');
	} catch (e) {
		console.log('Невозможно выполнить подключение к БД: ', e);
	}

	const brands = await db.Brand.findAll({raw: true,});
	const categorys = await db.Item_category.findAll({raw: true,});
	const types = await db.Item_type.findAll({raw: true,});
	const stores = await db.Store.findAll({raw: true,});
	const customers = await db.Customer.findAll({raw: true,});
	const customersPhone = await db.Customer_phone.findAll({raw: true,});
	const models = await db.Item_model.findAll({raw: true,});
	const orders = await db.Order.findAll({raw: true,});
	const items = await db.Item.findAll({raw: true,});
	const orderItems = await db.Order_items.findAll({raw: true,});

	//*1. получение всех данных из таблицы
		// brands.forEach(element => {console.log(element)});
		// categorys.forEach(element => {console.log(element)});
		// types.forEach(element => {console.log(element)});
		// stores.forEach(element => {console.log(element)});
		// customers.forEach(element => {console.log(element)});
		// customersPhone.forEach(element => {console.log(element)});
		// models.forEach(element => {console.log(element)});
		// orders.forEach(element => {console.log(element)});
		// items.forEach(element => {console.log(element)});
		// orderItems.forEach(element => {console.log(element)});

	//* 2. Получение данных для id больше
		// const brandsSamplingById = await db.Brand.findAll({
		// 	raw: true,
		// 	where: {
		// 		brandId: {[Op.gt]:25},
		// 	},
		// });
		// brandsSamplingById.forEach(element => {console.log(element)});

	//*3. Получение набора данных для нескольких значений одного атрибута.
		// const getDataItemModels = await db.Item_model.findAll({
		// 	raw: true,
		// 	attributes: [
		// 		['description', 'категория'],
		// 		[db.sequelize.fn('count', db.sequelize.col('title')), 'количество моделей']
		// 	],
		// 	group: ['description']
		// });
		// getDataItemModels.forEach(element => {console.log(element)});

	//* 4. запрос на удаление данных по массиву значений атрибута
		// const deleteItems = await db.Item.destroy({
		// 	where: {
		// 		itemId: {[Op.or]: [783,785]}
		// 	}
		// })

		//!т.к. прописал связи то выдает ошибку:
		//! error: UPDATE или DELETE в таблице "Items" нарушает ограничение внешнего ключа "Order_items_itemId_fkey" таблицы "Order_items"

		//* 5. запрос на изменение данных
			// const updatedItem = {
			// 	categId: 5,
			// 	typeId: 23,
			// 	modelId: 253,
			// 	storeId: 4,
			// 	title: '!!!!!updatedItem Аэратор водосберегающий DROP SP20E-F 4 л/мин 20 мм (внутренняя) (0601557961532)',
			// 	amount: 657,
			// 	price: 249,
			// 	description: 'updatedItem'
			// };

			// const updateItems = await db.Item.update(updatedItem,
			// 	{
			// 		where: {
			// 			itemId: 784
			// 		},
			// 		returning: ['title','amount','price', 'description']
			// 	}
			// )
			// console.log(updateItems);

})()


