'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
	class Customer extends Model {
		static associate({Customer_Phone, Order}) {
			this.hasMany(Customer_Phone, {foreignKey: 'customer_id'});
			this.hasMany(Order, {foreignKey: 'customer_id'});
		}
	}
	Customer.init({
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			set(value){
				this.setDataValue(
					'password',
					bcrypt.hashSync(value, 7)
				)
			}
		},
		description: DataTypes.TEXT
	}, {
		sequelize,
		modelName: 'Customer',
		tableName:'customers'
	});
	return Customer;
};