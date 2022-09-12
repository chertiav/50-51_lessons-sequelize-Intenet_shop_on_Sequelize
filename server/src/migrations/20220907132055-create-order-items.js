'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('order_items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			order_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'orders',
					key: 'id'
				}
			},
			item_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'items',
					key: 'id'
				}
			},
			amount: Sequelize.INTEGER,
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('order_items');
	}
};