'use strict';

const {orders} = require('../constants/internetShop-db-constants')

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('orders', orders, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('orders', null, {});
	}
};

