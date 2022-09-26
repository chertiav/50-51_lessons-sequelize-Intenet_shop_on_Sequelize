'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Order_Items extends Model {
		static associate(models) {}
	}
	Order_Items.init(
		{
			order_id: DataTypes.INTEGER,
			item_id: DataTypes.INTEGER,
			amount: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Order_Items',
			tableName: 'order_items',
		},
	);
	return Order_Items;
};
