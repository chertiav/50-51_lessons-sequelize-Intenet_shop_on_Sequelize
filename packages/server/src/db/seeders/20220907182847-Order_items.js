'use strict';
const {orderItems} = require('../constants/internetShop-db-constants');
module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('order_items', orderItems, {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('order_items', null, {});
	}
};
