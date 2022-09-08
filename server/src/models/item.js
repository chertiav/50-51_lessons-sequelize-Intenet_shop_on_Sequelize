'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Item extends Model {
		static associate({
			Item_category, Item_type,
			Item_model, Store, Order
		}) {
			this.belongsTo(Item_category, {foreignKey: 'categId'});
			this.belongsTo(Item_type, {foreignKey: 'typeId'});
			this.belongsTo(Item_model, {foreignKey: 'modelId'});
			this.belongsTo(Store, {foreignKey: 'storeId'});
			this.belongsToMany(Order, {through: 'Order_items', foreignKey: 'itemId'});
		}
	}
	Item.init({
		itemId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		categId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		modelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		storeId: {
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
		timestamps: false
	});
	return Item;
};