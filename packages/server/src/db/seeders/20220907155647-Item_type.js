'use strict';
const {types} = require('../constants/internetShop-db-constants')
module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('item_types', types, {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('item_types', null, {});
	}
};
