'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Orders', {
			orderId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			customerId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Customers',
					key: 'customerId',
				},
			},
			code: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			date: {
				type: Sequelize.DATEONLY,
				allowNull: false,
			},
			paid: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Orders');
	}
};