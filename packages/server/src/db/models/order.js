'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		static associate({Customer, Item}) {
			this.belongsTo(Customer, {foreignKey: 'customer_id'});
			this.belongsToMany(Item, {through: 'Order_Items', foreignKey: 'order_id'});
		}
	}
	Order.init({
		customer_id: {
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
		tableName:'orders'
	});
	return Order;
};