'use strict';

const stores = [
	{title:'Склад №1', description: ''},
	{title:'Склад №2', description: ''},
	{title:'Склад №3', description: ''},
	{title:'Склад №4', description: ''},
	{title:'Склад №5', description: ''},
]

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Stores', stores, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Stores', null, {});
	}
};

