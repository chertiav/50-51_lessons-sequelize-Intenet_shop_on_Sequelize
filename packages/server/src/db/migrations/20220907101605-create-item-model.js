'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('item_models', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			brand_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'brands',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('item_models');
	},
};
