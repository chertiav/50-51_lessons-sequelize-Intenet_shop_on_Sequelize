'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('customer_phones', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			customer_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'customers',
					key: 'id',
				},
			},
			type: {
				type: Sequelize.ENUM('рабочий', 'домашний'),
				allowNull: false,
			},
			number: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			description: {
				type: Sequelize.TEXT
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('customer_phones');
	}
};