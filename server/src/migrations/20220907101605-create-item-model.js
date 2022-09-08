'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Item_models', {
			modelId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			brandId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Brands',
					key: 'brandId',
				},
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Item_models');
	}
};