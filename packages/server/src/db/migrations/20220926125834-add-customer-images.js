'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('customers', 'image', Sequelize.STRING);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('customers', 'image');
	},
};
