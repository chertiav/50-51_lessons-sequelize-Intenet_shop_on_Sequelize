'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Customer_phones', {
			phoneId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			customerId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Customers',
					key: 'customerId',
				},
			},
			type: {
				type: Sequelize.ENUM('рабочий', 'домашний'),
				allowNull: false,
			},
			number: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			description: {
				type: Sequelize.TEXT
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Customer_phones');
	}
};