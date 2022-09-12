'use strict';

const {phones} = require('../constants/internetShop-db-constants')

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('customer_phones', phones, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('customer_phones', null, {});
	}
};
