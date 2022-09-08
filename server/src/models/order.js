'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		static associate({Customer, Item}) {
			this.belongsTo(Customer, {foreignKey: 'customerId'});
			this.belongsToMany(Item, {through: 'Order_items', foreignKey: 'orderId'});
		}
	}
	Order.init({
		orderId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		customerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		paid: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Order',
		timestamps: false
	});
	return Order;
};