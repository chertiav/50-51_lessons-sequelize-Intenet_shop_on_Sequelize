'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Customers', {
			customerId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			description: {
				type: Sequelize.TEXT
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Customers');
	}
};