'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			categ_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'item_categories',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			type_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'item_types',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			model_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'item_models',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			store_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'stores',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			amount: {
				type: Sequelize.INTEGER,
			},
			price: {
				type: Sequelize.REAL,
			},
			description: {
				type: Sequelize.TEXT,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('items');
	},
};
