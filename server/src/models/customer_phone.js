'use strict';
const {	Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Customer_phone extends Model {
		static associate({Customer}) {
			this.belongsTo(Customer, {foreignKey: 'customerId'});
		}
	}
	Customer_phone.init({
		phoneId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		customerId: {
			allowNull: false,
			type: DataTypes.INTEGER
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
		modelName: 'Customer_phone',
		timestamps: false
	});
	return Customer_phone;
};