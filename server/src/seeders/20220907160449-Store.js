'use strict';

const {stores} = require('../constants/internetShop-db-constants')

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('stores', stores, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('stores', null, {});
	}
};

