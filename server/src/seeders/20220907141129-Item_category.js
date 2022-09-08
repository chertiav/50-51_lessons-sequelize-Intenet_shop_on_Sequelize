'use strict';

const categories = [
	{title:'Ноутбуки и компьютеры', description: ''},
	{title:'Смартфоны, ТВ и электроника', description: ''},
	{title:'Бытовая техника', description: ''},
	{title:'Инструменты и автотовары', description: ''},
	{title:'Сантехника и ремонт', description: ''},
]

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Item_categories', categories, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Item_categories', null, {});
	}
};
