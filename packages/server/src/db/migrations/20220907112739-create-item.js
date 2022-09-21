'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			categ_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'item_categories',
					key: 'id',
				},
			},
			type_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'item_types',
					key: 'id',
				},
			},
			model_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'item_models',
					key: 'id',
				},
			},
			store_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'stores',
					key: 'id',
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
		await queryInterface.dropTable('items');
	}
};