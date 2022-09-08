'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Order_items extends Model {
		static associate(models) {
		}
	}
	Order_items.init({
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			},
		amount: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Order_items',
		timestamps: false
	});
	return Order_items;
};