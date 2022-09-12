'use strict';

const customers = require('../constants/internetShop-db-constants')

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('Customers', customers, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Customers', null, {});
	}
};
