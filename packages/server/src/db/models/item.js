'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item extends Model {
		static associate({
			Item_Category, Item_Type,
			Item_Model, Store, Order
		}) {
			this.belongsTo(Item_Category, {foreignKey: 'categ_id'});
			this.belongsTo(Item_Type, {foreignKey: 'type_id'});
			this.belongsTo(Item_Model, {foreignKey: 'model_id'});
			this.belongsTo(Store, {foreignKey: 'store_id'});
			this.belongsToMany(Order, {through: 'Order_Items', foreignKey: 'item_id'});
		}
	}
	Item.init({
		categ_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		type_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		model_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		store_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		amount: DataTypes.INTEGER,
		price: DataTypes.REAL,
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Item',
		tableName:'items'
	});
	return Item;
};