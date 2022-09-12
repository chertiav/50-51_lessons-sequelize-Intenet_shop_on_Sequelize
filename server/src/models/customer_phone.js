'use strict';
const {	Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Customer_Phone extends Model {
		static associate({Customer}) {
			this.belongsTo(Customer, {foreignKey: 'customer_id'});
		}
	}
	Customer_Phone.init({
		customer_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		type: {
			type: DataTypes.ENUM('рабочий', 'домашний'),
			allowNull: false,
		},
		number: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: DataTypes.TEXT,
	},
	{
		sequelize,
		modelName: 'Customer_Phone',
		tableName:'customer_phones'
	});
	return Customer_Phone;
};