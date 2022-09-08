'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Customer extends Model {
		static associate({Customer_phone,Order}) {
			Customer.hasMany(Customer_phone, {foreignKey: 'customerId'});
			Customer.hasMany(Order, {foreignKey: 'customerId'});
		}
	}
	Customer.init({
		customerId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: DataTypes.TEXT
	}, {
		sequelize,
		modelName: 'Customer',
		timestamps: false
	});
	return Customer;
};