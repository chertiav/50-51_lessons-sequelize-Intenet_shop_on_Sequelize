'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
	class Customer extends Model {
		static associate({ Customer_Phone, Order }) {
			this.hasMany(Customer_Phone, {
				as: 'phones',
				foreignKey: 'customer_id',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			});
			this.hasMany(Order, {
				foreignKey: 'customer_id',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			});
		}
	}
	Customer.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				set(value) {
					this.setDataValue('password', bcrypt.hashSync(value, 7));
				},
			},
			image: DataTypes.STRING,
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Customer',
			tableName: 'customers',
		},
	);
	return Customer;
};
