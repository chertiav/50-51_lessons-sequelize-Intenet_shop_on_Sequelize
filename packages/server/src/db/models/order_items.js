'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Order_Items extends Model {
		static associate(models) {
		}
	}
	Order_Items.init({
		order_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			},
		amount: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Order_Items',
		tableName:'order_items'
	});
	return Order_Items;
};