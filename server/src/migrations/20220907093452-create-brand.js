'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('brands', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			description: {
				type: Sequelize.TEXT
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('brands');
	}
};