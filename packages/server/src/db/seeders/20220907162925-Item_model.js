'use strict';
const {models} = require('../constants/internetShop-db-constants');
module.exports = {
	async up (queryInterface, Sequelize) {
			await queryInterface.bulkInsert('item_models', models, {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('item_models', null, {});
	}
};

