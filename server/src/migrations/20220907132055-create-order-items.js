'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Order_items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			orderId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Orders',
					key: 'orderId'
				}
			},
			itemId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Items',
					key: 'itemId'
				}
			},
			amount: Sequelize.INTEGER,
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Order_items');
	}
};