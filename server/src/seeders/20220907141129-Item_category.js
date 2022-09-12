'use strict';

const {categories} = require('../constants/internetShop-db-constants')

module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('item_categories', categories, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('item_categories', null, {});
	}
};
