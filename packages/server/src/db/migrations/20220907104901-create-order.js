'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('orders', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			customer_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'customers',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
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
				type: Sequelize.TEXT,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('orders');
	},
};
