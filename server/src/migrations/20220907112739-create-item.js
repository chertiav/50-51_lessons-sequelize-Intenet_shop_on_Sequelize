'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Items', {
			itemId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			categId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Item_categories',
					key: 'categId',
				},
			},
			typeId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Item_types',
					key: 'typeId',
				},
			},
			modelId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Item_models',
					key: 'modelId',
				},
			},
			storeId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Stores',
					key: 'storeId',
				},
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			amount: {
				type: Sequelize.INTEGER
			},
			price: {
				type: Sequelize.REAL
			},
			description: {
				type: Sequelize.TEXT
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Items');
	}
};